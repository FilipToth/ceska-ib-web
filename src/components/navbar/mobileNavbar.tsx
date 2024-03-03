import "assets/mobile-navbar.css"
import closeImg from "assets/close.svg"
import hamburger from "assets/hamburger.svg"
import rightArrow from "assets/right-arrow.svg"
import leftArrow from "assets/left-arrow.svg"
import IbLogo from "components/ibLogo";
import { useState } from "react";
import { DropdownEntry, aboutUsItems, regularItems } from "./navbarLinks";
import DropdownItem from "./dropdownItem";

const ExpandedNavbarItem = ({ text, clicked }: { text: string, clicked: (category: string) => void }) => {
    return (
        <div className="expanded-navbar-item-wrapper" onClick={() => clicked(text)}>
            <p className="expanded-navbar-item-text">{text}</p>
            <img src={rightArrow} className="expanded-navbar-item-arrow-image"></img>
        </div>
    );
};

interface ExpandedNavbarState {
    isAboutUs: boolean,
    isTopmost: boolean,
    subcategory: string | undefined
}

const ExpandedNavbar = ({ close }: { close: () => void }) => {
    let initialState: ExpandedNavbarState = {
        isAboutUs: false,
        isTopmost: true,
        subcategory: undefined
    };

    let [state, setState] = useState(initialState);

    const itemClick = (text: string) => {
        const newState: ExpandedNavbarState = {
            isAboutUs: false,
            isTopmost: false,
            subcategory: undefined
        };

        if (text == "About Us") {
            newState.isAboutUs = true;
        } else {
            if (!state.isTopmost)
                newState.isAboutUs = true;

            newState.subcategory = text;
        }

        setState(newState);
    };

    const back = () => {
        const newState: ExpandedNavbarState = {
            isAboutUs: false,
            isTopmost: false,
            subcategory: undefined
        };

        if ((state.isAboutUs && state.subcategory == null) || (!state.isAboutUs && state.subcategory != null)) {
            newState.isTopmost = true;
        } else if (state.isAboutUs && state.subcategory != null) {
            newState.isAboutUs = true;
        }

        setState(newState);
    };

    const elements: JSX.Element[] = [];
    let isLinks = false;

    const addNavbarItemsForSubcategories = (keys: string[]) => {
        keys.forEach((key) => {
            const element = <ExpandedNavbarItem text={key} clicked={itemClick} />
            elements.push(element);
        });
    };

    const addNavbarLinks = (links: DropdownEntry[]) => {
        links.forEach((link) => {
            const element = <DropdownItem text={link.text} redirect={link.redirect} textColor="white" />
            elements.push(element);
        });

        isLinks = true;
    };

    if (state.isAboutUs) {
        if (state.subcategory == undefined) {
            // choosing about us subcategory
            const keys = Object.keys(aboutUsItems);
            addNavbarItemsForSubcategories(keys);
        } else {
            // choosing links
            const links = aboutUsItems[state.subcategory];
            addNavbarLinks(links);
        }
    } else {
        if (state.isTopmost) {
            // choosing topmost subcategory
            const keys = Object.keys(regularItems);
            keys.splice(0, 0, "About Us");
            addNavbarItemsForSubcategories(keys);
        } else if (state.subcategory != undefined) {
            // ^ just make sure it's not undefined

            // choosing topmost regular subcategory items
            const links = regularItems[state.subcategory];
            addNavbarLinks(links);
        }
    }

    let bottomWrapperClass = "expanded-navbar-bottom-wrapper";
    if (isLinks) {
        bottomWrapperClass += " expanded-navbar-bottom-wrapper-links-layout";
    } else {
        bottomWrapperClass += " expanded-navbar-bottom-wrapper-subcategories-layout";
    }

    return (
        <div className="expanded-navbar-wrapper">
            <div className="expanded-navbar-top-wrapper">
                { !state.isTopmost && <img src={leftArrow} onClick={back} className="expanded-navbar-close-image"></img> }
                <img src={closeImg} onClick={close} className="expanded-navbar-close-image"></img>
            </div>
            <div className={bottomWrapperClass}>
                { elements }
            </div>
        </div>
    );
};

const MobileNavbar = () => {
    const [showExpandedNavbar, setShowExpandedNavbar] = useState(false);
    const hamburgerClick = () => {
        setShowExpandedNavbar(true);
        document.body.style.overflow = "hidden";
    };

    const closeNavbarExpansion = () => {
        setShowExpandedNavbar(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <div className="mobile-navbar-wrapper" onClick={hamburgerClick}>
                <img className="mobile-navbar-hamburger" src={hamburger}></img>
                <IbLogo />
            </div>
            { showExpandedNavbar && <ExpandedNavbar close={closeNavbarExpansion} />}
        </>
    );
};

export default MobileNavbar;
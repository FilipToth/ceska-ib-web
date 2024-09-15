import "assets/mobile-navbar.css"
import closeImg from "assets/close.svg"
import hamburger from "assets/hamburger.svg"
import rightArrow from "assets/right-arrow.svg"
import leftArrow from "assets/left-arrow.svg"
import { useState } from "react";
import { DropdownEntry, subjectsItems, regularItems, isTextInComplexDropdown } from "./navbarLinks";
import DropdownItem from "./DropdownItem";
import LogoBar from "components/logoBar"
import { redirect } from "utils/helpers"

const ExpandedNavbarItem = ({ text, clicked }: { text: string, clicked: (category: string) => void }) => {
    let redirectUrl = "";
    if (!isTextInComplexDropdown(text)) {
        const menu = regularItems[text];
        redirectUrl = menu.redirect;
    }

    return (
        <div className="expanded-navbar-item-wrapper" onClick={() => clicked(text)}>
            <p className="expanded-navbar-item-text">{text}</p>
            {redirectUrl == "" && <img src={rightArrow} className="expanded-navbar-item-arrow-image"></img>}
        </div>
    );
};

interface ExpandedNavbarState {
    // we have a single complex dropdown...
    isComplex: boolean,
    isTopmost: boolean,
    subcategory: string | undefined
}

const ExpandedNavbar = ({ close }: { close: () => void }) => {
    let initialState: ExpandedNavbarState = {
        isComplex: false,
        isTopmost: true,
        subcategory: undefined
    };

    let [state, setState] = useState(initialState);

    const itemClick = (text: string) => {
        let redirectUrl = "";
        if (!isTextInComplexDropdown(text)) {
            const menu = regularItems[text];
            redirectUrl = menu.redirect;
        }

        if (redirectUrl != "") {
            redirect(redirectUrl);
            return;
        }

        const newState: ExpandedNavbarState = {
            isComplex: false,
            isTopmost: false,
            subcategory: undefined
        };

        if (text == "Subjects") {
            newState.isComplex = true;
        } else {
            if (!state.isTopmost)
                newState.isComplex = true;

            newState.subcategory = text;
        }

        setState(newState);
    };

    const back = () => {
        const newState: ExpandedNavbarState = {
            isComplex: false,
            isTopmost: false,
            subcategory: undefined
        };

        if ((state.isComplex && state.subcategory == null) || (!state.isComplex && state.subcategory != null)) {
            newState.isTopmost = true;
        } else if (state.isComplex && state.subcategory != null) {
            newState.isComplex = true;
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
            const element = <DropdownItem text={link.text} url={link.redirect} icon={link.icon} textColor="white" />
            elements.push(element);
        });

        isLinks = true;
    };

    if (state.isComplex) {
        if (state.subcategory == undefined) {
            // choosing subjects subcategory
            const keys = Object.keys(subjectsItems);
            addNavbarItemsForSubcategories(keys);
        } else {
            // choosing links
            const links = subjectsItems[state.subcategory];
            addNavbarLinks(links);
        }
    } else {
        if (state.isTopmost) {
            // choosing topmost subcategory
            const keys = Object.keys(regularItems);
            keys.splice(0, 0, "Subjects");
            addNavbarItemsForSubcategories(keys);
        } else if (state.subcategory != undefined) {
            // ^ just make sure it's not undefined

            // choosing topmost regular subcategory items
            const menu = regularItems[state.subcategory];
            addNavbarLinks(menu.items);
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
                <div className="mobile-navbar-logo-wrapper">
                    <LogoBar wrapperStyle={{}} />
                </div>
            </div>
            { showExpandedNavbar && <ExpandedNavbar close={closeNavbarExpansion} />}
        </>
    );
};

export default MobileNavbar;
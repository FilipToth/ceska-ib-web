import "assets/mobile-navbar.css"
import closeImg from "assets/close.svg"
import hamburger from "assets/hamburger.svg"
import rightArrow from "assets/right-arrow.svg"
import leftArrow from "assets/left-arrow.svg"
import { useState } from "react";
import { DropdownEntry, NavbarItem, NavbarItems, isComplexDropdownMenu, isDropdownMenu, isSimpleNavbarItem } from "./navbarLinks";
import DropdownItem from "./DropdownItem";
import LogoBar from "components/logoBar"
import { redirect } from "utils/helpers"

const ExpandedNavbarItem = ({ text, redirectUrl, clicked }: { text: string, redirectUrl: string | undefined, clicked: (category: string) => void }) => {
    return (
        <div className="expanded-navbar-item-wrapper" onClick={() => clicked(text)}>
            <p className="expanded-navbar-item-text">{text}</p>
            {redirectUrl == undefined && <img src={rightArrow} className="expanded-navbar-item-arrow-image"></img>}
        </div>
    );
};

interface ExpandedNavbarState {
    prev: ExpandedNavbarState | undefined
    current: NavbarItem | undefined
}

const ExpandedNavbar = ({ items, close }: { items: NavbarItems, close: () => void }) => {
    const initialState: ExpandedNavbarState = {
        prev: undefined,
        current: undefined
    };

    const [state, setState] = useState(initialState);

    const itemClick = (text: string) => {
        const curr = state.current;

        let newState: ExpandedNavbarState | undefined = undefined;
        if (curr == undefined) {
            // topmost
            const item = items.items.filter((i) => i.text == text)[0];
            if (isSimpleNavbarItem(item)) {
                redirect(item.redirect);
                newState = state;
            } else {
                newState = {
                    prev: state,
                    current: item
                }
            }
        } else if (isComplexDropdownMenu(curr)) {
            const subcategory = curr.subcategories.filter((s) => s.text == text)[0];
            newState = {
                prev: state,
                current: subcategory
            }
        }

        if (newState == undefined)
            return;

        setState(newState);
    };

    const back = () => {
        if (state.prev == undefined)
            return;

        setState(state.prev);
    };

    const elements: JSX.Element[] = [];
    let isLinks = false;

    const addNavbarItemsForSubcategories = (items: NavbarItem[]) => {
        items.forEach((item) => {
            let redirect = undefined;
            if (isSimpleNavbarItem(item))
                redirect = item.redirect;

            const element = <ExpandedNavbarItem text={item.text} redirectUrl={redirect} clicked={itemClick} />
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

    if (state.prev == undefined) {
        // is topmost
        addNavbarItemsForSubcategories(items.items);
    } else if (state.current != undefined) {
        const item = state.current;

        if (isDropdownMenu(item)) {
            addNavbarLinks(item.items);
        } else if (isComplexDropdownMenu(item)) {
            addNavbarItemsForSubcategories(item.subcategories);
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
                { (state.prev != undefined) && <img src={leftArrow} onClick={back} className="expanded-navbar-close-image"></img> }
                <img src={closeImg} onClick={close} className="expanded-navbar-close-image"></img>
            </div>
            <div className={bottomWrapperClass}>
                { elements }
            </div>
        </div>
    );
};

const MobileNavbar = ({ items }: { items: NavbarItems }) => {
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
            { showExpandedNavbar && <ExpandedNavbar items={items} close={closeNavbarExpansion} />}
        </>
    );
};

export default MobileNavbar;
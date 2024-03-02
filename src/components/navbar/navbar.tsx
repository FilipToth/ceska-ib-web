import "assets/navbar.css"
import flag from 'assets/un_flag.webp'
import { useState } from "react";
import { aboutUsItems, regularItems } from "./navbarLinks";
import IbLogo from "components/ibLogo";

const open = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const DropdownItem = ({ text, redirect }: { text: string, redirect: string }) => {
    return (
        <div className="dropdown-item-wrapper" onClick={() => { open(redirect) }}>
            <img className="dropdown-item-image"></img>
            <p className="dropdown-item-name">{text}</p>
        </div>
    );
};

const DropdownMenu = ({ text, enter, leave }: { text: string, enter: () => void, leave: () => void }) => {
    var items = regularItems[text];
    const elements: JSX.Element[] = [];

    items.forEach((item) => {
        const element = <DropdownItem text={item.text} redirect={item.redirect} />
        elements.push(element);
    });

    return (
        <>
            <div className="navbar-dropdown-wrapper navbar-dropdown-wrapper-padding" onMouseEnter={enter} onMouseLeave={leave}>
                {elements}
            </div>
        </>
    );
};

const ComplexDropdownSubcategory = ({ text, changeHandler, isSelected }: { text: string, changeHandler: (text: string) => void, isSelected: boolean }) => {
    const enter = () => {
        changeHandler(text);
    };

    let wrapperClasses = "complex-dropdown-subcategory-wrapper";
    if (isSelected)
        wrapperClasses += " complex-dropdown-subcategory-wrapper-selected"

    return (
        <div className={wrapperClasses} onMouseEnter={enter}>
            <p className="complex-dropdown-subcategory-text"> {text}</p>
        </div>
    );
}

const ComplexDropdownMenu = ({ enter, leave }: { enter: () => void, leave: () => void}) => {
    const keys = Object.keys(aboutUsItems);
    const [category, setCategory] = useState(keys[0]);
    const changeContent = (cat: string) => {
        setCategory(cat);
    };

    const itemsForCategory = aboutUsItems[category]
    const dropDownElements: JSX.Element[] = [];
    itemsForCategory.forEach((item) => {
        const element = <DropdownItem text={item.text} redirect={item.redirect} />
        dropDownElements.push(element);
    });

    const subcategoryElements: JSX.Element[] = [];
    keys.forEach((key) => {
        const selected = key == category;
        const element = <ComplexDropdownSubcategory text={key} changeHandler={changeContent} isSelected={selected} />
        subcategoryElements.push(element);
    });

    return (
        <>
            <div className="navbar-dropdown-wrapper" onMouseEnter={enter} onMouseLeave={leave}>
                <div className="navbar-dropdown-subcategory-selector-wrappers">
                    {subcategoryElements}
                </div>
                <div className="navbar-dropdown-complex-link-wrapper">
                    {dropDownElements}
                </div>
            </div>
        </>
    );
};

const NavbarItem = ({ text }: { text: string }) => {
    const [mouseInNavbar, setMouseInNavbar] = useState(false);
    const [mouseInDropdown, setMouseInDropdown] = useState(false);

    const mouseEnter = () => {
        setMouseInNavbar(true);
    };

    const mouseLeave = () => {
        setMouseInNavbar(false);
    };

    const dropdownEnter = () => {
        setMouseInDropdown(true);
    };

    const dropdownLeave = () => {
        setMouseInDropdown(false);
    };

    const render = mouseInDropdown || mouseInNavbar;
    const dropdown = text != "About Us" ? <DropdownMenu text={text} enter={dropdownEnter} leave={dropdownLeave} />
        : <ComplexDropdownMenu enter={dropdownEnter} leave={dropdownLeave} />;

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="navbar-item-wrapper">
            <p className="navbar-text">{text}</p>
            {render && dropdown }
        </div>
    );
};

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <IbLogo />
            <div className="navbar">
                <NavbarItem text="About Us" />
                <NavbarItem text="Apply Now" />
                <NavbarItem text="For Students" />
                <NavbarItem text="For Parents" />
                <NavbarItem text="Events" />
            </div>
            <div className="language-picker-wrapper">
                <img className="flag" src={flag}></img>
                <p className="language-text">EN</p>
            </div>
        </div>
    );
};

export default Navbar;
import "assets/navbar.css"
import { useState } from "react";
import { subjectsItems, regularItems } from "./navbarLinks";
import IbLogo from "components/ibLogo";
import DropdownItem from "./dropdownItem";

const DropdownMenu = ({ text, enter, leave }: { text: string, enter: () => void, leave: () => void }) => {
    var items = regularItems[text];
    const elements: JSX.Element[] = [];

    items.forEach((item) => {
        const element = <DropdownItem text={item.text} url={item.redirect} icon={item.icon} textColor="black" />
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
    const keys = Object.keys(subjectsItems);
    const [category, setCategory] = useState(keys[0]);
    const changeContent = (cat: string) => {
        setCategory(cat);
    };

    const itemsForCategory = subjectsItems[category]
    const dropDownElements: JSX.Element[] = [];
    itemsForCategory.forEach((item) => {
        const element = <DropdownItem text={item.text} url={item.redirect} icon={item.icon} textColor="black" />
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
    const dropdown = text != "Subjects" ? <DropdownMenu text={text} enter={dropdownEnter} leave={dropdownLeave} />
        : <ComplexDropdownMenu enter={dropdownEnter} leave={dropdownLeave} />;

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="navbar-item-wrapper">
            <p className="navbar-text">{text}</p>
            {render && dropdown }
        </div>
    );
};

const Navbar = () => {
    const keys = Object.keys(regularItems);
    keys.splice(0, 0, "Subjects");

    const elements: JSX.Element[] = [];
    keys.forEach((key) => {
        const element = <NavbarItem text={key} />
        elements.push(element);
    });

    return (
        <div className="navbar-wrapper">
            <IbLogo />
            <div className="navbar">
                {elements}
            </div>
            {/* <div className="language-picker-wrapper">
                <img className="flag" src={flag}></img>
                <p className="language-text">EN</p>
            </div> */}
        </div>
    );
};

export default Navbar;
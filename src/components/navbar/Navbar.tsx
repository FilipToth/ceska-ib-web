import "assets/navbar.css"
import { useState } from "react";
import DropdownItem from "./DropdownItem";
import LogoBar from "components/logoBar";
import { redirect } from "utils/helpers";
import { ComplexDropdownMenu, DropdownMenu, NavbarItem, isComplexDropdownMenu, isDropdownMenu, isSimpleNavbarItem, mainItems } from "./navbarLinks";

const DropdownMenu = ({ item, enter, leave }: { item: DropdownMenu, enter: () => void, leave: () => void }) => {
    if (mainItems.items.length == 0)
        return <></>

    const elements: JSX.Element[] = [];
    item.items.forEach((item) => {
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

const ComplexDropdownMenu = ({ item, enter, leave }: { item: ComplexDropdownMenu, enter: () => void, leave: () => void}) => {
    const subcategories = item.subcategories;
    const subcategoryKeys = subcategories.map((s) => s.text);

    const [category, setCategory] = useState(subcategoryKeys[0]);
    const changeContent = (cat: string) => {
        setCategory(cat);
    };

    const itemsForCategory = subcategories.filter((s) => s.text == category)[0].items;
    const dropDownElements: JSX.Element[] = [];
    itemsForCategory.forEach((item) => {
        const element = <DropdownItem text={item.text} url={item.redirect} icon={item.icon} textColor="black" />
        dropDownElements.push(element);
    });

    const subcategoryElements: JSX.Element[] = [];
    subcategoryKeys.forEach((key) => {
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

const NavbarItem = ({ item }: { item: NavbarItem }) => {
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

    let redirectUrl = "";
    if (isSimpleNavbarItem(item)) {
        redirectUrl = item.redirect;
    }

    const textClick = () => {
        if (redirectUrl == "")
            return;

        redirect(redirectUrl);
    };

    let navbarTextClass = "navbar-text";
    if (redirectUrl != "")
        navbarTextClass += " navbar-text-clickable"

    const render = mouseInDropdown || mouseInNavbar;

    let dropdown = undefined;
    if (isDropdownMenu(item)) {
        dropdown = <DropdownMenu item={item} enter={dropdownEnter} leave={dropdownLeave} />;
    } else if (isComplexDropdownMenu(item)) {
        dropdown = <ComplexDropdownMenu item={item} enter={dropdownEnter} leave={dropdownLeave} />;
    }

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="navbar-item-wrapper">
            <p className={navbarTextClass} onClick={textClick}>{item.text}</p>
            {render && dropdown }
        </div>
    );
};

const Navbar = () => {
    const elements: JSX.Element[] = [];
    mainItems.items.forEach((item) => {
        const element = <NavbarItem item={item} />
        elements.push(element);
    });

    return (
        <div className="navbar-wrapper">
            <LogoBar wrapperStyle={{ 'paddingTop': '8px' }} />
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
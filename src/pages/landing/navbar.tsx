import "assets/landing-navbar.css"
import flag from 'assets/un_flag.webp'
import ibLogo from 'assets/ib-world-school-logo-2-colour.png'
import { useState } from "react";

interface DropdownEntry {
    text: string;
    redirect: string;
}

const regularItems: { [category: string]: DropdownEntry[] } = {
    "About Us": [
        { text: "Math HL", redirect: "k" },
        { text: "Math HL", redirect: "k" },
        { text: "Math HL", redirect: "k" },
        { text: "Math HL", redirect: "k" },
        { text: "Math HL", redirect: "k" },
        { text: "Math HL", redirect: "k" },
        { text: "Math HL", redirect: "k" },
        { text: "Math HL", redirect: "k" },
    ],
    "Apply Now": [
        { text: "Apply", redirect: "k" },
        { text: "Apply", redirect: "k" },
        { text: "Apply", redirect: "k" },
        { text: "Apply", redirect: "k" },
        { text: "Apply", redirect: "k" },
    ],
    "For Students": [
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
        { text: "Student Resource", redirect: "k" },
    ],
    "For Parents": [
        { text: "Parent Thing", redirect: "k" },
        { text: "Parent Thing", redirect: "k" },
        { text: "Parent Thing", redirect: "k" },
        { text: "Parent Thing", redirect: "k" },
        { text: "Parent Thing", redirect: "k" },
        { text: "Parent Thing", redirect: "k" },
    ],
    "Events": [
        { text: "A BORING EVENT", redirect: "k" },
        { text: "A BORING EVENT", redirect: "k" },
        { text: "A BORING EVENT", redirect: "k" },
        { text: "A BORING EVENT", redirect: "k" },
        { text: "A BORING EVENT", redirect: "k" },
        { text: "A BORING EVENT", redirect: "k" },
    ]
};

const DropdownItem = ({ text, redirect }: { text: string, redirect: string }) => {
    return (
        <div className="dropdown-item-wrapper">
            <img className="dropdown-item-image"></img>
            <p className="dropdown-item-name">{text}</p>
        </div>
    );
};

const DropdownMenu = ({ text }: { text: string }) => {
    var items = regularItems[text];
    console.log(items);

    let elements: JSX.Element[] = [];
    items.forEach((item) => {
        let element = <DropdownItem text={item.text} redirect={item.redirect} />
        elements.push(element);
    });

    return (
        <>
            <div className="navbar-dropdown-wrapper">
                {elements}
            </div>
        </>
    );
};

const NavbarItem = ({ text }: { text: string }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const mouseEnter = () => {
        setDropdownVisible(true);
    };

    const mouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <p className="navbar-text">{text}</p>
            {dropdownVisible && <DropdownMenu text={text} />}
        </div>
    );
};

const Navbar = () => {
    const mouseEnter = () => {

    };

    const mouseLeave = () => {

    };

    return (
        <div className="navbar-wrapper">
            <div className="ib-logo-spacer" >
                <div className="ib-logo-wrapper">
                    <img className="ib-logo" src={ibLogo}></img>
                </div>
            </div>
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
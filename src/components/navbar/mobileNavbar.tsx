import "assets/mobile-navbar.css"
import closeImg from "assets/close.svg"
import hamburger from "assets/hamburger.svg"
import rightArrow from "assets/right-arrow.svg"
import IbLogo from "components/ibLogo";
import { useState } from "react";

const ExpandedNavbarItem = ({ text }: { text: string }) => {
    return (
        <div className="expanded-navbar-item-wrapper">
            <p className="expanded-navbar-item-text">{text}</p>
            <img src={rightArrow} className="expanded-navbar-item-arrow-image"></img>
        </div>
    );
};

const ExpandedNavbar = ({ close }: { close: () => void }) => {
    return (
        <div className="expanded-navbar-wrapper">
            <div className="expanded-navbar-top-wrapper">
                <img src={closeImg} onClick={close} className="expanded-navbar-close-image"></img>
            </div>
            <div className="expanded-navbar-bottom-wrapper">
                <ExpandedNavbarItem text="Siuhawdh" />
                <ExpandedNavbarItem text="Siuhawdh" />
                <ExpandedNavbarItem text="Siuhawdh" />
                <ExpandedNavbarItem text="Siuhawdh" />
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
import "assets/landing-page-subsection.css"
import "assets/landing-page-main-subsection.css"
import EngagedButton from "components/engagedButton";
import MobileNavbar from "components/navbar/MobileNavbar";
import Navbar from "components/navbar/Navbar";
import { NavbarItems } from "components/navbar/navbarLinks";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { initGradient } from "./gradientWrapper";

type ClickHandler = () => void;

const LandingPageMainSubsection = ({ heading, subheading, btnText, btnClick, rightObject, navbarItems, gradientId, btnGradient }: { heading: string, subheading: string, btnText: string | undefined, btnClick: ClickHandler | undefined, rightObject: React.ReactElement, navbarItems: NavbarItems, gradientId: string, btnGradient: string[] }) => {
    const isMobileNavbar = useMediaQuery({ query: "(max-width: 600px)" });

    useEffect(() => {
        initGradient(`#${gradientId}`);
    }, []);

    if (btnGradient.length != 2)
        btnGradient = ["#14B5EB", "#D226E1"];

    const btnStyle: React.CSSProperties = {
        "background": `linear-gradient(89.83deg, ${btnGradient[0]} 3.77%, ${btnGradient[1]}  92.26%)`,
        'order': 2
    };

    return (
        <div className="landing-wrapper">
            <canvas id={gradientId} width="203" data-transition-in data-js-darken-top></canvas>
            { !isMobileNavbar && <Navbar items={navbarItems} /> }
            { isMobileNavbar && <MobileNavbar items={navbarItems} /> }
            <div className="top-info-align-wrapper">
                <div className="info-wrapper">
                    <p className="gradient-text">{heading}</p>
                    <p className="gradient-about-text">{subheading}</p>
                    { (btnClick != undefined && btnText != undefined) &&
                        <EngagedButton text={btnText} onClick={btnClick} additionalStyle={btnStyle}/>
                    }
                </div>
                {rightObject}
            </div>
        </div>
    );
};

export default LandingPageMainSubsection;
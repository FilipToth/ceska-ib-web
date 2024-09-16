import EngagedButton from "components/engagedButton";
import MobileNavbar from "components/navbar/MobileNavbar";
import Navbar from "components/navbar/Navbar";
import { useMediaQuery } from "react-responsive";

type ClickHandler = () => void;

const LandingPageMainSubsection = ({ heading, subheading, btnText, btnClick, rightObject }: { heading: string, subheading: string, btnText: string | undefined, btnClick: ClickHandler | undefined, rightObject: React.ReactElement }) => {
    const isMobileNavbar = useMediaQuery({ query: "(max-width: 600px)" });

    return (
        <div className="landing-wrapper">
            <canvas id="gradient-canvas" width="203" data-transition-in data-js-darken-top></canvas>
            { !isMobileNavbar && <Navbar /> }
            { isMobileNavbar && <MobileNavbar /> }
            <div className="top-info-align-wrapper">
                <div className="info-wrapper">
                    <p className="gradient-text">{heading}</p>
                    <p className="gradient-about-text">{subheading}</p>
                    { (btnClick != undefined && btnText != undefined) &&
                        <EngagedButton text={btnText} onClick={btnClick} additionalStyle={ {'order': 2} }/>
                    }
                </div>
                {rightObject}
            </div>
        </div>
    );
};

export default LandingPageMainSubsection;
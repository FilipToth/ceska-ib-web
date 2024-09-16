import "assets/landing-page-subsection.css"
import EngagedButton from "components/engagedButton";
import React from "react";

type ClickHandler = () => void;

const LandingPageSubsection = ({ heading, subheading, rightImage, btnText, onClick, btnGradient }: { heading: string, subheading: string, rightImage: string, btnText: string | undefined, onClick: ClickHandler | undefined, btnGradient: string[] }) => {
    if (btnGradient.length != 2)
        btnGradient = ["#14B5EB", "#D226E1"];

    const btnStyle: React.CSSProperties = {
        "background": `linear-gradient(89.83deg, ${btnGradient[0]} 3.77%, ${btnGradient[1]}  92.26%)`,
        'order': 2
    };

    return (
        <div className="landing-wrapper">
            <div className="landing-subpage-layout">
                <div className="landing-subpage-left-wrapper">
                    <p className="landing-subpage-heading">{heading}</p>
                    <p className="landing-subpage-subheading">{subheading}</p>

                    { (onClick != undefined && btnText != undefined) &&
                        <EngagedButton text={btnText} onClick={onClick} additionalStyle={btnStyle}/>
                    }
                </div>
                <img className="landing-subpage-animation-canvas" src={rightImage}></img>
            </div>
        </div>
    );
};

export default LandingPageSubsection;
import EngagedButton from "components/engagedButton";

type ClickHandler = () => void;

const LandingPageSubsection = ({ heading, subheading, rightImage, btnText, onClick }: { heading: string, subheading: string, rightImage: string, btnText: string | undefined, onClick: ClickHandler | undefined }) => {
    return (
        <div className="landing-wrapper">
            <div className="landing-subpage-layout">
                <div className="landing-subpage-left-wrapper">
                    <p className="landing-subpage-heading">{heading}</p>
                    <p className="landing-subpage-subheading">{subheading}</p>

                    { (onClick != undefined && btnText != undefined) &&
                        <EngagedButton text={btnText} onClick={onClick} additionalStyle={ {'order': 2} }/>
                    }
                </div>
                <img className="landing-subpage-animation-canvas" src={rightImage}></img>
            </div>
        </div>
    );
};

export default LandingPageSubsection;
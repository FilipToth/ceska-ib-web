import "assets/landing.css"
import "assets/landing-navbar.css"
import flag from 'assets/un_flag.webp'
import logo from 'assets/ib-world-school-logo-2-colour.png'
import EngagedButton from "components/engagedButton";

const LandingPage = () => {
    return (
        <div className="landing-1-wrapper">
            <div className="gradient-wrapper"></div>
            <div className="navbar-wrapper">
                <div className="ib-logo-spacer">
                    <div className="ib-logo-wrapper">
                        <img className="ib-logo" src={logo}></img>
                    </div>
                </div>
                <div className="navbar">
                    <p1 className="navbar-text">About Us</p1>
                    <p1 className="navbar-text">Apply Now</p1>
                    <p1 className="navbar-text">For Students</p1>
                    <p1 className="navbar-text">For Parents</p1>
                    <p1 className="navbar-text">Events</p1>
                </div>
                <div className="language-picker-wrapper">
                    <img className="flag" src={flag}></img>
                    <p1 className="language-text">EN</p1>
                </div>
            </div>
            <div className="info-wrapper">
                <p1 className="gradient-text">A World-class Curriculum for the Next Generation of Leaders</p1>
                <p1 className="gradient-about-text">The IB Diploma Programme molds leaders through rigorous academics, critical thinking, and social responsibility, preparing students for a connected world with confidence and empathy.</p1>
                <EngagedButton text={"About the IB"} additionalStyle={ {'order': 2} }/>
            </div>
        </div>
    )
};

export default LandingPage;
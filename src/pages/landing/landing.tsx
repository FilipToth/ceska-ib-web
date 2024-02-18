import "assets/landing.css"
import "assets/landing-navbar.css"
import flag from 'assets/un_flag.webp'
import logo from 'assets/ib-world-school-logo-2-colour.png'
import EngagedButton from "components/engagedButton"
import { Gradient } from "assets/gradient"
import { useEffect } from "react"

const LandingPage = () => {

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
        <div className="landing-1-wrapper">
            <canvas id="gradient-canvas" width="203" data-transition-in data-js-darken-top></canvas>
            <div className="navbar-wrapper">
                <div className="ib-logo-spacer" >
                    <div className="ib-logo-wrapper">
                        <img className="ib-logo" src={logo}></img>
                    </div>
                </div>
                <div className="navbar">
                    <h1 className="navbar-text">About Us</h1>
                    <h1 className="navbar-text">Apply Now</h1>
                    <h1 className="navbar-text">For Students</h1>
                    <h1 className="navbar-text">For Parents</h1>
                    <h1 className="navbar-text">Events</h1>
                </div>
                <div className="language-picker-wrapper">
                    <img className="flag" src={flag}></img>
                    <h1 className="language-text">EN</h1>
                </div>
            </div>
            <div className="info-wrapper">
                <h1 className="gradient-text">A World-class Curriculum for the Next Generation of Leaders</h1>
                <h1 className="gradient-about-text">The IB Diploma Programme molds leaders through rigorous academics, critical thinking, and social responsibility, preparing students for a connected world with confidence and empathy.</h1>
                <EngagedButton text={"About the IB"} onClick={() => {}} additionalStyle={ {'order': 2} }/>
            </div>
        </div>
    )
};

export default LandingPage;
import "assets/landing-1.css"
import "assets/landing-2.css"
import "assets/landing-footer.css"
import "assets/landing-navbar.css"
import flag from 'assets/un_flag.webp'
import schoolLogo from 'assets/school-logo.png'
import ibLogo from 'assets/ib-world-school-logo-2-colour.png'
import EngagedButton from "components/engagedButton"
import { Gradient } from "assets/gradient"
import { useEffect } from "react"

const LandingPage = () => {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    return (
        <>
            <div className="landing-wrapper">
            <canvas id="gradient-canvas" width="203" data-transition-in data-js-darken-top></canvas>
                <div className="navbar-wrapper">
                    <div className="ib-logo-spacer" >
                        <div className="ib-logo-wrapper">
                            <img className="ib-logo" src={ibLogo}></img>
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
                <div className="top-info-align-wrapper">
                    <div className="info-wrapper">
                        <p className="gradient-text">A World-class Curriculum for the Next Generation of Leaders</p>
                        <p className="gradient-about-text">The IB Diploma Programme molds leaders through rigorous academics, critical thinking, and social responsibility, preparing students for a connected world with confidence and empathy.</p>
                        <EngagedButton text={"About the IB"} onClick={() => {}} additionalStyle={ {'order': 2} }/>
                    </div>
                    <p>     wpiefj    Three.js Animation       </p>
                </div>
            </div>
            <div className="landing-wrapper">
                <div className="landing-subpage-layout">
                    <div>
                        <div className="landing-subpage-left-wrapper">
                            <p className="landing-subpage-heading">An education like no other!</p>
                            <p className="landing-subpage-subheading">Lorem pahfujbaouifhiaebfo aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di Lorem pahfujbaouifhiaebfo ]aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di</p>
                            <EngagedButton text={"About the IB"} onClick={() => {}} additionalStyle={ {'order': 2} }/>
                        </div>
                    </div>
                    <canvas className="landing-subpage-animation-canvas" width={600} height={600}></canvas>
                </div>
            </div>
            <div className="landing-wrapper">
                <div className="landing-subpage-layout">
                    <div>
                        <div className="landing-subpage-left-wrapper">
                            <p className="landing-subpage-heading">Why Ceska?</p>
                            <p className="landing-subpage-subheading">Lorem pahfujbaouifhiaebfo aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di Lorem pahfujbaouifhiaebfo ]aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di</p>
                            <EngagedButton text={"About the IB"} onClick={() => {}} additionalStyle={ {'order': 2} }/>
                        </div>
                    </div>
                    <canvas className="landing-subpage-animation-canvas" width={600} height={600}></canvas>
                </div>
            </div>
            <div className="footer-page-wrapper">
                <div className="footer-wrapper">
                    <div className="footer-content-wrapper">
                        <div className="footer-content-group">
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                        </div>
                        <div className="footer-content-group">
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                        </div>
                        <div className="footer-content-group">
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                        </div>
                        <div className="footer-content-group">
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                            <p className="footer-content-text">About Us</p>
                        </div>
                    </div>
                    <div className="footer-bottom-wrapper">
                        <p className="school-name-text">© 2024 Sukromne Bilyngvalne Gymnazium Ceska 10</p>
                        <div className="footer-bottom-right-wrapper">
                            <div className="school-logo-wrapper">
                                <img className="school-logo" src={schoolLogo}></img>
                            </div>
                            <div className="ib-logo-spacer" >
                                <div className="ib-logo-wrapper">
                                    <img className="ib-logo" src={ibLogo}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LandingPage;
import "assets/landing-1.css"
import "assets/landing-2.css"
import whyCeska from "assets/why-ceska.svg"
import EngagedButton from "components/engagedButton"
import { Gradient } from "assets/gradient"
import { useEffect } from "react"
import Footer from "./footer"
import Navbar from "components/navbar/navbar"
import { useMediaQuery } from "react-responsive"
import MobileNavbar from "components/navbar/mobileNavbar"
import Triangle from "./triangle"
import { redirect } from "utils/helpers"

const LandingPage = () => {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);

    const aboutIBClick = () => {
        redirect("other/what-is-ib.pdf");
    };

    const isMobileNavbar = useMediaQuery({ query: "(max-width: 600px)" });
    return (
        <>
            <div className="landing-wrapper">
                <canvas id="gradient-canvas" width="203" data-transition-in data-js-darken-top></canvas>
                { !isMobileNavbar && <Navbar /> }
                { isMobileNavbar && <MobileNavbar /> }
                <div className="top-info-align-wrapper">
                    <div className="info-wrapper">
                        <p className="gradient-text">A World-class Curriculum for the Next Generation of Leaders</p>
                        <p className="gradient-about-text">The IB Diploma Programme molds leaders through rigorous academics, critical thinking, and social responsibility, preparing students for a connected world with confidence and empathy.</p>
                        <EngagedButton text={"About the IB"} onClick={() => { aboutIBClick() }} additionalStyle={ {'order': 2} }/>
                    </div>
                   <Triangle />
                </div>
            </div>
            <div className="landing-wrapper">
                <div className="landing-subpage-layout">
                    <div className="landing-subpage-left-wrapper">
                        <p className="landing-subpage-heading">An education like no other!</p>
                        <p className="landing-subpage-subheading">Lorem pahfujbaouifhiaebfo aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di Lorem pahfujbaouifhiaebfo ]aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di</p>
                        <EngagedButton text={"About the IB"} onClick={() => {}} additionalStyle={ {'order': 2} }/>
                    </div>
                    <canvas className="landing-subpage-animation-canvas" width={600} height={600}></canvas>
                </div>
            </div>
            <div className="landing-wrapper">
                <div className="landing-subpage-layout">
                    <div className="landing-subpage-left-wrapper">
                        <p className="landing-subpage-heading">Why Ceska?</p>
                        <p className="landing-subpage-subheading">Lorem pahfujbaouifhiaebfo aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di Lorem pahfujbaouifhiaebfo ]aeoufhapoeujfpou jhbwjgdvbaojefpi hbwa09di</p>
                        <EngagedButton text={"About the IB"} onClick={() => {}} additionalStyle={ {'order': 2} }/>
                    </div>
                    <img className="landing-subpage-animation-canvas" src={whyCeska}></img>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default LandingPage;
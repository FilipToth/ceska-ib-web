import "assets/landing-1.css"
import "assets/landing-2.css"
import whyCeska from "assets/why-ceska.svg"
import ibDescription from "assets/ib-description.svg"
import EngagedButton from "components/engagedButton"
import { useEffect } from "react"
import Footer from "./footer"
import Navbar from "components/navbar/navbar"
import { useMediaQuery } from "react-responsive"
import MobileNavbar from "components/navbar/mobileNavbar"
import Triangle from "./triangle"
import { redirect } from "utils/helpers"
import { initGradient } from "./gradientWrapper"

const LandingPage = () => {
    useEffect(() => {
        initGradient();
    }, []);

    const aboutIBClick = () => {
        redirect("other/what-is-ib.pdf");
    };

    const ibHistoryClick = () => {
        redirect("other/ib-history.pdf");
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
                        <p className="landing-subpage-subheading">The IB Diploma program offers a comprehensive and globally recognized curriculum, fostering critical thinking and intercultural understanding. Through inquiry-based learning and community service, students develop essential skills for success in today's interconnected world. Graduates emerge as well-rounded individuals, equipped to tackle challenges with confidence and integrity. Joining the IB community opens doors to diverse opportunities for personal growth and academic excellence.</p>
                        <EngagedButton text={"History of the IB"} onClick={() => { ibHistoryClick() }} additionalStyle={ {'order': 2} }/>
                    </div>
                    <img className="landing-subpage-animation-canvas" src={ibDescription}></img>
                </div>
            </div>
            <div className="landing-wrapper">
                <div className="landing-subpage-layout">
                    <div className="landing-subpage-left-wrapper">
                        <p className="landing-subpage-heading">Why Ceska?</p>
                        <p className="landing-subpage-subheading">Sukromne Gymnazium Ceska offers tailored support and a nurturing environment for academic excellence. With experienced faculty and personalized attention, students develop essential skills for lifelong success. Join our collaborative community to excel academically and grow as well-rounded individuals prepared for the future.</p>
                    </div>
                    <img className="landing-subpage-animation-canvas" src={whyCeska}></img>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default LandingPage;
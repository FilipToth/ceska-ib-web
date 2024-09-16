import "assets/landing-1.css"
import "assets/landing-2.css"
import whyCeska from "assets/why-ceska.svg"
import ibDescription from "assets/ib-description.svg"
import EngagedButton from "components/engagedButton"
import { useEffect } from "react"
import Footer from "../../components/Footer"
import Navbar from "components/navbar/Navbar"
import { useMediaQuery } from "react-responsive"
import MobileNavbar from "components/navbar/MobileNavbar"
import Triangle from "./Triangle"
import { redirect } from "utils/helpers"
import { initGradient } from "./gradientWrapper"
import LandingPageSubsection from "./LandingPageSubsection"
import LandingPageMainSubsection from "./LandingPageMainSubsection"

const MainLanding = () => {
    useEffect(() => {
        initGradient("#gradient-canvas");
    }, []);

    const aboutIBClick = () => {
        redirect("other/what-is-ib.pdf");
    };

    const ibHistoryClick = () => {
        redirect("other/ib-history.pdf");
    };

    const firstHeading = "A World-class Curriculum for the Next Generation of Leaders";
    const firstSubheading = "The IB Diploma Programme molds leaders through rigorous academics, critical thinking, and social responsibility, preparing students for a connected world with confidence and empathy.";

    const secondHeading = "An education like no other!";
    const secondSubheading = "The IB Diploma program offers a comprehensive and globally recognized curriculum, fostering critical thinking and intercultural understanding. Through inquiry-based learning and community service, students develop essential skills for success in today's interconnected world. Graduates emerge as well-rounded individuals, equipped to tackle challenges with confidence and integrity. Joining the IB community opens doors to diverse opportunities for personal growth and academic excellence.";

    const thirdHeading = "Why Česká?";
    const thirdSubheading = "Sukromne Gymnazium Česká offers tailored support and a nurturing environment for academic excellence. With experienced faculty and personalized attention, students develop essential skills for lifelong success. Join our collaborative community to excel academically and grow as well-rounded individuals prepared for the future.";

    return (
        <>
            <LandingPageMainSubsection heading={firstHeading} subheading={firstSubheading} btnText="About the IB" btnClick={aboutIBClick} rightObject={<Triangle />} />
            <LandingPageSubsection heading={secondHeading} subheading={secondSubheading} rightImage={ibDescription} btnText="History of the IB" onClick={ibHistoryClick} />
            <LandingPageSubsection heading={thirdHeading} subheading={thirdSubheading} rightImage={whyCeska} btnText={undefined} onClick={undefined} />
            <Footer />
        </>
    )
};

export default MainLanding;
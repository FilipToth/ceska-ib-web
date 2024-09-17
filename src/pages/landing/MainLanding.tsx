import whyCeska from "assets/why-ceska-main.svg"
import ibDescription from "assets/ib-description-main.svg"
import Footer from "../../components/Footer"
import { redirect } from "utils/helpers"
import LandingPageSubsection from "./LandingPageSubsection"
import LandingPageMainSubsection from "./LandingPageMainSubsection"
import { NavbarItems } from "components/navbar/navbarLinks"
import ThreeJs from "./ThreeJs"

const navbarItems: NavbarItems = {
    items: [
        {
            text: "MYP",
            redirect: "/myp"
        },
        {
            text: "DP",
            redirect: "/dp"
        },
        {
            text: "School Policies",
            items: [
                { text: "Academic Integrity", redirect: "other/academic-integrity.pdf", icon: "icons/document.png" },
                { text: "Assessment Policy", redirect: "other/assessment-policy.pdf", icon: "icons/document.png" },
                { text: "Inclusion Policy", redirect: "other/inclusion-policy.pdf", icon: "icons/document.png" },
                { text: "Language Policy", redirect: "other/language-policy.pdf", icon: "icons/document.png" },
                { text: "Org Chart", redirect: "other/org-chart.jpg", icon: "icons/document.png" },
                { text: "Mission & Vision Statement", redirect: "other/mission-vision.pdf", icon: "icons/document.png" }
            ]
        },
        {
            text: "International Cooperation",
            redirect: "other/international-cooperation.pdf"
        },
        {
            text: "Gallery",
            redirect: "/albums"
        }
    ]
};

const MainLanding = () => {
    const aboutIBClick = () => {
        redirect("other/what-is-ib.pdf");
    };

    const ibHistoryClick = () => {
        redirect("other/ib-history.pdf");
    };

    const redirects = {};
    const object = "3d/low_poly_earth.glb";
    const three = <ThreeJs path={object} redirects={redirects} />;

    const gradientId = "gradient-canvas-main"
    const gradient = ["#FF2339", "#D226E1"];

    const firstHeading = "A World-class Institution for the Next Generation of Leaders";
    const firstSubheading = "The International Baccalaureate (IB) fosters global-minded individuals through rigorous academics, personal development, and intercultural understanding. By promoting critical thinking and lifelong learning, the IB prepares students to succeed in a complex, interconnected world.";

    const secondHeading = "An education like no other!";
    const secondSubheading = "Explore a holistic and globally recognized curriculum that prepares students to thrive in a complex, interconnected world. The International Baccalaureate (IB) nurtures students' intellectual, personal, emotional, and social skills, offering both the Diploma Programme (DP) for 16–19-year-olds and the Middle Years Programme (MYP) for 11-16-year-olds.";

    const thirdHeading = "Why Česká?";
    const thirdSubheading = "At our school, we provide a world-class learning environment with modern equipment and state-of-the-art infrastructure. Our team of skilled teachers and professional staff are dedicated to ensuring that each student receives the highest quality education. With a focus on individualized attention and innovative teaching methods, we prioritize learning and the holistic development of every student, preparing them for success both academically and in life.";

    return (
        <>
            <LandingPageMainSubsection heading={firstHeading} subheading={firstSubheading} btnText="About the IB" btnClick={aboutIBClick} rightObject={three} navbarItems={navbarItems} gradientId={gradientId} btnGradient={gradient} />
            <LandingPageSubsection heading={secondHeading} subheading={secondSubheading} rightImage={ibDescription} btnText="History of the IB" onClick={ibHistoryClick} btnGradient={gradient} />
            <LandingPageSubsection heading={thirdHeading} subheading={thirdSubheading} rightImage={whyCeska} btnText={undefined} onClick={undefined} btnGradient={gradient} />
            <Footer gradient={gradient} />
        </>
    )
};

export default MainLanding;
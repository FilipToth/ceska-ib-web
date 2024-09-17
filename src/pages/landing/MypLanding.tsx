import whyCeska from "assets/why-ceska-myp.svg"
import ibDescription from "assets/ib-description-myp.svg"
import Footer from "../../components/Footer"
import { redirect } from "utils/helpers"
import LandingPageSubsection from "./LandingPageSubsection"
import LandingPageMainSubsection from "./LandingPageMainSubsection"
import { NavbarItems } from "components/navbar/navbarLinks"
import ThreeJs from "./ThreeJs"

const navbarItems: NavbarItems = {
    items: [
        {
            text: "Our Vision",
            redirect: "other/myp-mission-statement.pdf"
        },
        {
            text: "IB Learner Profile",
            redirect: "other/learner-profile.pdf"
        },
        {
            text: "Policies",
            items: [
                { text: "FAQs", redirect: "other/myp-faqs.pdf", icon: "icons/document.png" },
                { text: "MYP at a Glance", redirect: "other/myp-at-a-glance.pdf", icon: "icons/document.png" },
                { text: "Marketing MYP", redirect: "other/marketing-myp.pdf", icon: "icons/document.png" },
            ]
        },
        {
            text: "IB - Home",
            redirect: "/"
        }
    ]
};

const MypLanding = () => {
    const aboutIBClick = () => {
        redirect("other/what-is-ib.pdf");
    };

    const ibHistoryClick = () => {
        redirect("other/ib-history.pdf");
    };

    const redirects = {};
    const object = "3d/myp.glb";
    const three = <ThreeJs path={object} redirects={redirects} />;

    const gradientId = "gradient-canvas-myp"
    const gradient = ["#FF2339", "#F0A133"];

    const firstHeading = "A World-class Program for the Next Generation of Leaders";
    const firstSubheading = "The IB Middle Years Programme (MYP) challenges students aged 11 to 16 to think critically and make connections between their studies and the real world. With an interdisciplinary approach, it helps learners develop global awareness, personal responsibility, and a passion for learning.";

    const secondHeading = "An education like no other!";
    const secondSubheading = "The IB Middle Years Programme (MYP) provides students with a framework that encourages them to become creative, critical, and reflective thinkers. It supports the development of communication skills, intercultural understanding, and the ability to engage with challenging concepts.";

    const thirdHeading = "Why Česká?";
    const thirdSubheading = "Sukromne Gymnazium Česká offers tailored support and a nurturing environment for academic excellence. With experienced faculty and personalized attention, students develop essential skills for lifelong success. Join our collaborative community to excel academically and grow as well-rounded individuals prepared for the future.";

    return (
        <>
            <LandingPageMainSubsection heading={firstHeading} subheading={firstSubheading} btnText="About the IB" btnClick={aboutIBClick} rightObject={three} navbarItems={navbarItems} gradientId={gradientId} btnGradient={gradient} />
            <LandingPageSubsection heading={secondHeading} subheading={secondSubheading} rightImage={ibDescription} btnText="History of the IB" onClick={ibHistoryClick} btnGradient={gradient} />
            <LandingPageSubsection heading={thirdHeading} subheading={thirdSubheading} rightImage={whyCeska} btnText={undefined} onClick={undefined} btnGradient={gradient} />
            <Footer gradient={gradient} />
        </>
    )
};

export default MypLanding;
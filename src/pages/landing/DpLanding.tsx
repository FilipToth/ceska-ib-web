import whyCeska from "assets/why-ceska-dp.svg"
import ibDescription from "assets/ib-description-dp.svg"
import Footer from "../../components/Footer"
import Triangle from "./Triangle"
import { redirect } from "utils/helpers"
import LandingPageSubsection from "./LandingPageSubsection"
import LandingPageMainSubsection from "./LandingPageMainSubsection"
import { NavbarItems } from "components/navbar/navbarLinks"

const navbarItems: NavbarItems = {
    items: [
        {
            text: "IB - Home",
            redirect: "/"
        },
        {
            text: "IB Core",
            items: [
                { text: "CAS Handbook", redirect: "other/cas-handbook.pdf", icon: "icons/document.png" },
                { text: "TOK", redirect: "other/tok.pdf", icon: "icons/tok.svg" },
                { text: "EE", redirect: "other/ee.pdf", icon: "icons/ee.svg" },
                { text: "History of the IB", redirect: "other/ib-history.pdf", icon: "icons/document.png" },
                { text: "What is an IB Education", redirect: "other/what-is-ib.pdf", icon: "icons/document.png" }
            ]
        },
        {
            text: "Subjects",
            subcategories: [
                {
                    text: "Sciences",
                    items: [
                        { text: "Computer Science SL", redirect: "subjects/cs-sl.pdf", icon: "icons/cs.svg" },
                        { text: "Computer Science HL", redirect: "subjects/cs-hl.pdf", icon: "icons/cs.svg" },
                        { text: "Biology", redirect: "subjects/bio.pdf", icon: "icons/bio.svg" },
                        { text: "Chemistry", redirect: "subjects/chem.pdf", icon: "icons/chem.svg" },
                        { text: "Environmental Studies", redirect: "subjects/ess.pdf", icon: "icons/ess.svg" },
                        { text: "Physics", redirect: "subjects/physics.pdf", icon: "icons/physics.svg" },
                        { text: "Math AA", redirect: "subjects/math-aa.pdf", icon: "icons/math-aa.svg" },
                        { text: "Math AI", redirect: "subjects/math-ai.pdf", icon: "icons/math-ai.svg" }
                    ]
                },
                {
                    text: "Languages",
                    items: [
                        { text: "Language A", redirect: "subjects/lang-a.pdf", icon: "icons/lang-a.svg" },
                        { text: "Language B", redirect: "subjects/lang-b.pdf", icon: "icons/lang-a.svg" },
                    ]
                },
                {
                    text: "Humanities",
                    items: [
                        { text: "Economics HL", redirect: "subjects/econ-hl.pdf", icon: "icons/econ.svg" },
                        { text: "Economics SL", redirect: "subjects/econ-sl.pdf", icon: "icons/econ.svg" },
                        { text: "Psychology", redirect: "subjects/psychology.pdf", icon: "icons/psycho.svg" },
                        { text: "Geography", redirect: "subjects/geo.pdf", icon: "icons/geo.svg" },
                        { text: "Global Politics", redirect: "subjects/global-politics.pdf", icon: "icons/global-politics.svg" },
                        { text: "History HL", redirect: "subjects/history-hl.pdf", icon: "icons/history.svg" },
                        { text: "History SL", redirect: "subjects/history-sl.pdf", icon: "icons/history.svg" }
                    ]
                },
                {
                    text: "Core",
                    items: [
                        { text: "TOK - CORE", redirect: "other/core-tok-2022.pdf", icon: "icons/psycho.svg" }
                    ]
                }
            ]
        },
        {
            text: "Apply Now",
            items: [
                { text: "Admissions Criteria", redirect: "other/admissions-criteria.pdf", icon: "icons/document.png" },
                { text: "Admissions Policy", redirect: "other/admissions-policy.pdf", icon: "icons/document.png" },
                { text: "Admissions Process Info", redirect: "other/admissions-process-info.pdf", icon: "icons/document.png" },
                { text: "Admissions Announcement", redirect: "other/admissions-announcement.pdf", icon: "icons/document.png" },
                { text: "Tuition", redirect: "other/tuition.pdf", icon: "icons/document.png" },
                { text: "Application English", redirect: "other/application-english.pdf", icon: "icons/document.png" },
                { text: "Applicaton Slovak", redirect: "other/application-slovak.pdf", icon: "icons/document.png" },
                { text: "Sample Test - MATH", redirect: "other/sample-test-math.pdf", icon: "icons/math-aa.svg" },
                { text: "Sample Test - ENGLISH", redirect: "other/sample-test-english.pdf", icon: "icons/lang-a.svg" },
                { text: "Course Selection Sheet", redirect: "other/course_selection_sheet_2024_2025.pdf", icon: "icons/document.png"},
                { text: "Course Selection Sheet - Slovak", redirect: "other/course_selection_sheet_2024_2025_slovak.pdf", icon: "icons/document.png"}
            ]
        }
    ]
};

const DpLanding = () => {
    const aboutIBClick = () => {
        redirect("other/what-is-ib.pdf");
    };

    const ibHistoryClick = () => {
        redirect("other/ib-history.pdf");
    };

    const gradientId = "gradient-canvas-dp"
    const gradient = ["#14B5EB", "#D226E1"];

    const firstHeading = "A World-class Curriculum for the Next Generation of Leaders";
    const firstSubheading = "The IB Diploma Programme (DP) is designed for students aged 16 to 19, providing them with a challenging and balanced education. It equips learners with the knowledge, skills, and attitudes necessary for success in higher education and beyond, fostering global awareness and a commitment to lifelong learning.";

    const secondHeading = "An education like no other!";
    const secondSubheading = "The IB Diploma Programme (DP) emphasizes both breadth and depth of knowledge. Students take courses in six subject areas and engage in core components like the Theory of Knowledge, the Extended Essay, and CAS, preparing them to succeed academically and thrive in a global society.";

    const thirdHeading = "Why Česká?";
    const thirdSubheading = "At our school, we provide a world-class learning environment with modern equipment and state-of-the-art infrastructure. Our team of skilled teachers and professional staff are dedicated to ensuring that each student receives the highest quality education. With a focus on individualized attention and innovative teaching methods, we prioritize learning and the holistic development of every student, preparing them for success both academically and in life.";

    return (
        <>
            <LandingPageMainSubsection heading={firstHeading} subheading={firstSubheading} btnText="About the IB DP" btnClick={aboutIBClick} rightObject={<Triangle />} navbarItems={navbarItems} gradientId={gradientId} btnGradient={gradient} />
            <LandingPageSubsection heading={secondHeading} subheading={secondSubheading} rightImage={ibDescription} btnText="History of the IB" onClick={ibHistoryClick} btnGradient={gradient} />
            <LandingPageSubsection heading={thirdHeading} subheading={thirdSubheading} rightImage={whyCeska} btnText={undefined} onClick={undefined} btnGradient={gradient} />
            <Footer gradient={gradient} />
        </>
    )
};

export default DpLanding;
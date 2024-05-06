interface DropdownEntry {
    text: string;
    redirect: string;
    icon: string;
}

interface DropDownMenu {
    redirect: string,
    items: DropdownEntry[]
}

const subjectsItems: { [subCategory: string]: DropdownEntry[] } = {
    "Sciences": [
        { text: "Computer Science SL", redirect: "subjects/cs-sl.pdf", icon: "icons/cs.svg" },
        { text: "Computer Science HL", redirect: "subjects/cs-hl.pdf", icon: "icons/cs.svg" },
        { text: "Biology", redirect: "subjects/bio.pdf", icon: "icons/bio.svg" },
        { text: "Chemistry", redirect: "subjects/chem.pdf", icon: "icons/chem.svg" },
        { text: "Environmental Studies", redirect: "subjects/ess.pdf", icon: "icons/ess.svg" },
        { text: "Physics", redirect: "subjects/physics.pdf", icon: "icons/physics.svg" },
        { text: "Math AA", redirect: "subjects/math-aa.pdf", icon: "icons/math-aa.svg" },
        { text: "Math AI", redirect: "subjects/math-ai.pdf", icon: "icons/math-ai.svg" }
    ],
    "Languages": [
        { text: "Language A", redirect: "subjects/lang-a.pdf", icon: "icons/lang-a.svg" },
        { text: "Language B", redirect: "subjects/lang-b.pdf", icon: "icons/lang-a.svg" },
    ],
    "Humanities": [
        { text: "Economics HL", redirect: "subjects/econ-hl.pdf", icon: "icons/econ.svg" },
        { text: "Economics SL", redirect: "subjects/econ-sl.pdf", icon: "icons/econ.svg" },
        { text: "Psychology", redirect: "subjects/psychology.pdf", icon: "icons/psycho.svg" },
        { text: "Geography", redirect: "subjects/geo.pdf", icon: "icons/geo.svg" },
        { text: "Global Politics", redirect: "subjects/global-politics.pdf", icon: "icons/global-politics.svg" },
        { text: "History HL", redirect: "subjects/history-hl.pdf", icon: "icons/history.svg" },
        { text: "History SL", redirect: "subjects/history-sl.pdf", icon: "icons/history.svg" }
    ],
    "Core": [
        { text: "TOK - CORE", redirect: "other/core-tok-2022.pdf", icon: "icons/psycho.svg" }
    ]
};

const regularItems: { [category: string]: DropDownMenu } = {
    "IB Core": {
        redirect: "",
        items: [
            { text: "CAS Handbook", redirect: "other/cas-handbook.pdf", icon: "icons/document.png" },
            { text: "TOK", redirect: "other/tok.pdf", icon: "icons/tok.svg" },
            { text: "EE", redirect: "other/ee.pdf", icon: "icons/ee.svg" },
            { text: "History of the IB", redirect: "other/ib-history.pdf", icon: "icons/document.png" },
            { text: "What is an IB Education", redirect: "other/what-is-ib.pdf", icon: "icons/document.png" }
        ]
    },
    "School Policies": {
        redirect: "",
        items: [
            { text: "Academic Integrity", redirect: "other/academic-integrity.pdf", icon: "icons/document.png" },
            { text: "Assessment Policy", redirect: "other/assessment-policy.pdf", icon: "icons/document.png" },
            { text: "Inclusion Policy", redirect: "other/inclusion-policy.pdf", icon: "icons/document.png" },
            { text: "Language Policy", redirect: "other/language-policy.pdf", icon: "icons/document.png" },
            { text: "Org Chart", redirect: "other/org-chart.jpg", icon: "icons/document.png" }
        ]
    },
    "Apply Now": {
        redirect: "",
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
    },
    "Gallery": {
        redirect: "albums",
        items: []
    }
};

const isTextInComplexDropdown = (text: string) => {
    const subjects = Object.keys(subjectsItems);
    return text == "Subjects" || subjects.includes(text);
};

export { subjectsItems, regularItems, isTextInComplexDropdown, type DropdownEntry };
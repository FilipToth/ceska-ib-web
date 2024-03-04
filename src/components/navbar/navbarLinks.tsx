interface DropdownEntry {
    text: string;
    redirect: string;
    icon: string;
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
    ]
};

const regularItems: { [category: string]: DropdownEntry[] } = {
    "Apply Now": [
        { text: "Admissions Criteria", redirect: "other/admissions-criteria.pdf", icon: "icons/document.png" },
        { text: "Application English", redirect: "other/application-english.pdf", icon: "icons/document.png" },
        { text: "Applicaton Slovak", redirect: "other/application-slovak.pdf", icon: "icons/document.png" },
    ],
    "IB Core": [
        { text: "CAS Handbook", redirect: "other/cas-handbook.pdf", icon: "icons/document.png" },
        { text: "TOK", redirect: "other/tok.pdf", icon: "icons/tok.svg" },
        { text: "EE", redirect: "other/ee.pdf", icon: "icons/ee.svg" },
        { text: "History of the IB", redirect: "other/ib-history.pdf", icon: "icons/document.png" },
        { text: "What is an IB Education", redirect: "other/what-is-ib.pdf", icon: "icons/document.png" }
    ],
    "About Us": [
        { text: "Academic Integrity", redirect: "other/academic-integrity.pdf", icon: "icons/document.png" },
        { text: "Assessment Policy", redirect: "other/assessment-policy.pdf", icon: "icons/document.png" },
        { text: "Inclusion Policy", redirect: "other/inclusion-policy.pdf", icon: "icons/document.png" },
        { text: "Language Policy", redirect: "other/language-policy.pdf", icon: "icons/document.png" },
        { text: "Newsletter", redirect: "other/newsletter.pdf", icon: "icons/document.png" },
        { text: "Org Chart", redirect: "other/org-chart.jpg", icon: "icons/document.png" }
    ]
};

export { subjectsItems, regularItems, type DropdownEntry };
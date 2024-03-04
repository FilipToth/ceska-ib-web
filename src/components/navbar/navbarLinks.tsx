interface DropdownEntry {
    text: string;
    redirect: string;
}

const subjectsItems: { [subCategory: string]: DropdownEntry[] } = {
    "Sciences": [
        { text: "Computer Science SL", redirect: "subjects/cs-sl.pdf" },
        { text: "Computer Science HL", redirect: "subjects/cs-hl.pdf" },
        { text: "Biology", redirect: "subjects/bio.pdf" },
        { text: "Chemistry", redirect: "subjects/chem.pdf" },
        { text: "Environmental Studies", redirect: "subjects/ess.pdf" },
        { text: "Math AA", redirect: "subjects/math-aa.pdf" },
        { text: "Math AI", redirect: "subjects/math-ai.pdf" }
    ],
    "Languages": [
        { text: "Language A", redirect: "subjects/lang-a.pdf" },
        { text: "Language B", redirect: "subjects/lang-b.pdf" },
    ],
    "Humanities": [
        { text: "Economics HL", redirect: "subjects/econ-hl.pdf" },
        { text: "Economics SL", redirect: "subjects/econ-sl.pdf" },
        { text: "Psychology", redirect: "subjects/psychology.pdf" },
        { text: "Geography", redirect: "subjects/geo.pdf" },
        { text: "Global Politics", redirect: "subjects/global-politics.pdf" },
        { text: "History HL", redirect: "subjects/history-hl.pdf" },
        { text: "History SL", redirect: "subjects/history-sl.pdf" }
    ]
};

const regularItems: { [category: string]: DropdownEntry[] } = {
    "Apply Now": [
        { text: "Admissions Criteria", redirect: "other/admissions-criteria.pdf" },
        { text: "Application English", redirect: "other/application-english.pdf" },
        { text: "Applicaton Slovak", redirect: "other/application-slovak.pdf" },
    ],
    "IB Core": [
        { text: "CAS Handbook", redirect: "other/cas-handbook.pdf" },
        { text: "TOK", redirect: "other/tok.pdf" },
        { text: "EE", redirect: "other/ee.pdf" },
        { text: "History of the IB", redirect: "other/ib-history.pdf" },
        { text: "What is an IB Education", redirect: "other/what-is-ib.pdf" }
    ],
    "About Us": [
        { text: "Academic Integrity", redirect: "other/academic-integrity.pdf" },
        { text: "Assessment Policy", redirect: "other/assessment-policy.pdf" },
        { text: "Inclusion Policy", redirect: "other/inclusion-policy.pdf" },
        { text: "Language Policy", redirect: "other/language-policy.pdf" },
        { text: "Newsletter", redirect: "other/newsletter.pdf" },
        { text: "Org Chart", redirect: "other/org-chart.jpg" }
    ]
};

export { subjectsItems, regularItems, type DropdownEntry };
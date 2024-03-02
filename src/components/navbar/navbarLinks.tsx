interface DropdownEntry {
    text: string;
    redirect: string;
}

const aboutUsItems: { [subCategory: string]: DropdownEntry[] } = {
    "Subjects": [
        { text: "Math HL", redirect: "/src/assets/un_flag.webp" },
        { text: "Slovek Ejch El", redirect: "/src/assets/un_flag.webp" },
        { text: "Math HL", redirect: "/src/assets/un_flag.webp" },
        { text: "Math HL", redirect: "/src/assets/un_flag.webp" },
        { text: "Math HL", redirect: "/src/assets/un_flag.webp" },
        { text: "Math HL", redirect: "/src/assets/un_flag.webp" },
        { text: "Math HL", redirect: "/src/assets/un_flag.webp" },
        { text: "Math HL", redirect: "/src/assets/un_flag.webp" },
    ],
    "Other Thimgamajig": [
        { text: "Woof Woof", redirect: "/src/assets/un_flag.webp" },
        { text: "Woof Woof", redirect: "/src/assets/un_flag.webp" },
        { text: "Woof Woof", redirect: "/src/assets/un_flag.webp" },
        { text: "Woof Woof", redirect: "/src/assets/un_flag.webp" },
        { text: "Woof Woof", redirect: "/src/assets/un_flag.webp" },
        { text: "Woof Woof", redirect: "/src/assets/un_flag.webp" },
    ],
    "Thiccc": [
        { text: "HAHJKHJDN HL", redirect: "/src/assets/un_flag.webp" },
        { text: "HAHJKHJDN HL", redirect: "/src/assets/un_flag.webp" },
        { text: "HAHJKHJDN HL", redirect: "/src/assets/un_flag.webp" },
        { text: "HAHJKHJDN HL", redirect: "/src/assets/un_flag.webp" },
    ]
};

const regularItems: { [category: string]: DropdownEntry[] } = {
    "Apply Now": [
        { text: "Apply", redirect: "/src/assets/un_flag.webp" },
        { text: "Apply", redirect: "/src/assets/un_flag.webp" },
        { text: "Apply", redirect: "/src/assets/un_flag.webp" },
        { text: "Apply", redirect: "/src/assets/un_flag.webp" },
        { text: "Apply", redirect: "/src/assets/un_flag.webp" },
    ],
    "For Students": [
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
        { text: "Student Resource", redirect: "/src/assets/un_flag.webp" },
    ],
    "For Parents": [
        { text: "Parent Thing", redirect: "/src/assets/un_flag.webp" },
        { text: "Parent Thing", redirect: "/src/assets/un_flag.webp" },
        { text: "Parent Thing", redirect: "/src/assets/un_flag.webp" },
        { text: "Parent Thing", redirect: "/src/assets/un_flag.webp" },
        { text: "Parent Thing", redirect: "/src/assets/un_flag.webp" },
        { text: "Parent Thing", redirect: "/src/assets/un_flag.webp" },
    ],
    "Events": [
        { text: "A BORING EVENT", redirect: "/src/assets/un_flag.webp" },
        { text: "A BORING EVENT", redirect: "/src/assets/un_flag.webp" },
        { text: "A BORING EVENT", redirect: "/src/assets/un_flag.webp" },
        { text: "A BORING EVENT", redirect: "/src/assets/un_flag.webp" },
        { text: "A BORING EVENT", redirect: "/src/assets/un_flag.webp" },
        { text: "A BORING EVENT", redirect: "/src/assets/un_flag.webp" },
    ]
};

export { aboutUsItems, regularItems, type DropdownEntry };
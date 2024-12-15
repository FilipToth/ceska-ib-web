const LOW_WIDTH = 400;
const MID_WIDTH = 750;
const HIGH_WIDTH = 1300;

interface AlbumEntry {
    id: string;
    name: string;
    description: string;
    itemsParentDir: string;
    thumbsParentDir: string;
    lowParentDir: string;
    midParentDir: string;
    highParentDir: string;
    items: string[];
}

const albums: AlbumEntry[] = [
    {
        id: "0",
        name: "Vienna Trip",
        description: "August 2023",
        itemsParentDir: "album-photos/vienna/original/",
        thumbsParentDir: "album-photos/vienna/thumbs/",
        lowParentDir: "album-photos/vienna/low/",
        midParentDir: "album-photos/vienna/mid/",
        highParentDir: "album-photos/vienna/high/",
        items: [
            "70048622468__8D0B57C5-4497-4903-8CFC-7470AAA9ED06.png",
            "IMG_8325.png",
            "IMG_8326.png",
            "IMG_8328.png",
            "IMG_8331.png",
            "IMG_8332.png",
            "IMG_8337.png",
            "IMG_8356.png",
            "IMG_8358.png",
            "IMG_8364.png",
            "IMG_8366.png",
            "IMG_8367.png",
            "IMG_8368.png",
            "IMG_8369.png",
            "IMG_8370.png",
            "IMG_8371.png",
            "IMG_8372.png",
            "IMG_8374.png",
            "IMG_8375.png",
            "IMG_8377.png",
            "IMG_8378.png",
            "IMG_8381.png",
            "IMG_8384.png",
            "IMG_8385.png",
            "IMG_8386.png",
            "IMG_8387.png",
            "IMG_8388.png",
            "IMG_8389.png",
            "IMG_8390.png",
            "IMG_8391.png",
            "IMG_8392.png",
            "IMG_8394.png",
            "IMG_8395.png",
            "IMG_8397.png",
            "IMG_8400.png",
        ],
    },
    {
        id: "1",
        name: "Our School",
        description: ":D",
        itemsParentDir: "album-photos/our-school/original/",
        thumbsParentDir: "album-photos/our-school/thumbs/",
        lowParentDir: "album-photos/our-school/low/",
        midParentDir: "album-photos/our-school/mid/",
        highParentDir: "album-photos/our-school/high/",
        items: [
            "Image-1.jpeg",
            "Image.jpeg",
            "IMG20220203123732.jpg",
            "IMG20220203124143.jpg",
            "IMG20220202093739.jpg",
            "IMG20220202092837 (1).jpg",
            "IMG20220202093540.jpg",
            "IMG20220203123750.jpg",
            "IMG20220203123637.jpg",
            "IMG_3956-2.jpg",
            "IMG20220202092713.jpg",
            "IMG20220202092837.jpg",
            "IMG20220202092749.jpg",
            "IMG20220202092833.jpg",
            "IMG20220203123814.jpg",
            "IMG20220202145900.jpg",
            "IMG20220202093817.jpg",
            "IMG20220202093457.jpg",
            "IMG20220202100405.jpg",
            "IMG20220202092605.jpg",
            "IMG20220202092625.jpg",
            "IMG20220202100421.jpg",
        ],
    },
    {
        id: "2",
        name: "International Workshop: Milano - Bratislava",
        description:
            "The IB DP students collaborated with the students from Milan, Italy and Slovakia, and researched the Atomic Power perspectives. They met at Sukromne gymnazium Ceska in Bratislava, Slovakia, where they presented their outcomes during the workshop.",
        itemsParentDir: "album-photos/milano/original/",
        thumbsParentDir: "album-photos/milano/thumbs/",
        lowParentDir: "album-photos/milano/low/",
        midParentDir: "album-photos/milano/mid/",
        highParentDir: "album-photos/milano/high/",
        items: [
            "IMG_2437.JPG",
            "IMG_2438.JPG",
            "IMG_2439.JPG",
            "IMG_2435.JPG",
            "IMG_2441.JPG",
            "IMG_2443.JPG",
            "IMG_2442.JPG",
            "IMG_2440.JPG",
        ],
    },
];

export { albums, type AlbumEntry, LOW_WIDTH, MID_WIDTH, HIGH_WIDTH };

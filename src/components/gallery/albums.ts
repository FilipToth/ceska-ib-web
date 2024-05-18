const LOW_WIDTH = 400;
const MID_WIDTH = 750;
const HIGH_WIDTH = 1300;

interface AlbumEntry {
    id: string,
    name: string,
    description: string,
    itemsParentDir: string,
    thumbsParentDir: string,
    lowParentDir: string,
    midParentDir: string,
    highParentDir: string,
    items: string[]
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
            "IMG_8400.png"
        ]
    }
];

export { albums, type AlbumEntry, LOW_WIDTH, MID_WIDTH, HIGH_WIDTH };
interface AlbumEntry {
    id: string,
    name: string,
    description: string,
    items: string[]
}

const albums: AlbumEntry[] = [
    { id: "0", name: "Vienna Trip", description: "August 2023", items: [
        "album-photos/vienna/70048622468__8D0B57C5-4497-4903-8CFC-7470AAA9ED06.png",
        "album-photos/vienna/IMG_8325.png",
        "album-photos/vienna/IMG_8326.png",
        "album-photos/vienna/IMG_8328.png",
        "album-photos/vienna/IMG_8331.png",
        "album-photos/vienna/IMG_8332.png",
        "album-photos/vienna/IMG_8337.png",
        "album-photos/vienna/IMG_8356.png",
        "album-photos/vienna/IMG_8358.png",
        "album-photos/vienna/IMG_8364.png",
        "album-photos/vienna/IMG_8366.png",
        "album-photos/vienna/IMG_8367.png",
        "album-photos/vienna/IMG_8368.png",
        "album-photos/vienna/IMG_8369.png",
        "album-photos/vienna/IMG_8370.png",
        "album-photos/vienna/IMG_8371.png",
        "album-photos/vienna/IMG_8372.png",
        "album-photos/vienna/IMG_8374.png",
        "album-photos/vienna/IMG_8375.png",
        "album-photos/vienna/IMG_8377.png",
        "album-photos/vienna/IMG_8378.png",
        "album-photos/vienna/IMG_8381.png",
        "album-photos/vienna/IMG_8384.png",
        "album-photos/vienna/IMG_8385.png",
        "album-photos/vienna/IMG_8386.png",
        "album-photos/vienna/IMG_8387.png",
        "album-photos/vienna/IMG_8388.png",
        "album-photos/vienna/IMG_8389.png",
        "album-photos/vienna/IMG_8390.png",
        "album-photos/vienna/IMG_8391.png",
        "album-photos/vienna/IMG_8392.png",
        "album-photos/vienna/IMG_8394.png",
        "album-photos/vienna/IMG_8395.png",
        "album-photos/vienna/IMG_8397.png",
        "album-photos/vienna/IMG_8400.png"
    ]}
];

export { albums, type AlbumEntry };
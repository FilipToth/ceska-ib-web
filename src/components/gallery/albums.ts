interface AlbumEntry {
    id: string,
    name: string,
    description: string,
    items: string[]
}

const albums: AlbumEntry[] = [
    { id: "0", name: "Vienna Trip", description: "August 2023", items: [
        "albums/vienna/70048622468__8D0B57C5-4497-4903-8CFC-7470AAA9ED06.png",
        "albums/vienna/IMG_8325.png",
        "albums/vienna/IMG_8326.png",
        "albums/vienna/IMG_8328.png",
        "albums/vienna/IMG_8331.png",
        "albums/vienna/IMG_8332.png",
        "albums/vienna/IMG_8337.png",
        "albums/vienna/IMG_8356.png",
        "albums/vienna/IMG_8358.png",
        "albums/vienna/IMG_8364.png",
        "albums/vienna/IMG_8366.png",
        "albums/vienna/IMG_8367.png",
        "albums/vienna/IMG_8368.png",
        "albums/vienna/IMG_8369.png",
        "albums/vienna/IMG_8370.png",
        "albums/vienna/IMG_8371.png",
        "albums/vienna/IMG_8372.png",
        "albums/vienna/IMG_8374.png",
        "albums/vienna/IMG_8375.png",
        "albums/vienna/IMG_8377.png",
        "albums/vienna/IMG_8378.png",
        "albums/vienna/IMG_8381.png",
        "albums/vienna/IMG_8384.png",
        "albums/vienna/IMG_8385.png",
        "albums/vienna/IMG_8386.png",
        "albums/vienna/IMG_8387.png",
        "albums/vienna/IMG_8388.png",
        "albums/vienna/IMG_8389.png",
        "albums/vienna/IMG_8390.png",
        "albums/vienna/IMG_8391.png",
        "albums/vienna/IMG_8392.png",
        "albums/vienna/IMG_8394.png",
        "albums/vienna/IMG_8395.png",
        "albums/vienna/IMG_8397.png",
        "albums/vienna/IMG_8400.png"
    ]}
];

export { albums, type AlbumEntry };
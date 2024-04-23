interface AlbumEntry {
    id: string,
    name: string,
    description: string,
    items: string[]
}

const albums: AlbumEntry[] = [
    { id: "0", name: "First Album", description: "Test Description", items: [
        "sf.jpg",
        "flag.png",
        "sf.jpg",
        "flag.png",
        "sf.jpg",
        "sf.jpg",
        "flag.png"
    ]}
];

export { albums, type AlbumEntry };
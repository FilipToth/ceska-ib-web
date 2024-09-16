import "assets/gallery.css"
import { AlbumEntry, albums, LOW_WIDTH, MID_WIDTH, HIGH_WIDTH } from "components/gallery/albums";
import Footer from "components/Footer";
import GalleryHeader from "components/gallery/GalleryHeader";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSearchParams } from "react-router-dom";

interface AlbumVisualInfo {
    name: string,
    items: string[]
}

const Gallery = () => {
    const getAlbumItems = (album: AlbumEntry) => {
        const windowWidth = window.innerWidth;

        let numBreakouts = 1;
        if (windowWidth >= 900)
            numBreakouts = 3;
        else if (windowWidth >= 650)
            numBreakouts = 2;

        const width = windowWidth / numBreakouts;

        let parent = album.itemsParentDir;
        if (width <= LOW_WIDTH)
            parent = album.lowParentDir;
        else if (width <= MID_WIDTH)
            parent = album.midParentDir;
        else if (width < HIGH_WIDTH)
            parent = album.highParentDir;

        const items = album.items.map((i) => parent + i);
        return items;
    }

    const getAlbumInfo = () => {
        const [queryParams] = useSearchParams();
        const id = queryParams.get('id');

        const empty: AlbumVisualInfo = { name: '', items: [] };
        if (id == null)
            return empty;

        const matching = albums.filter((e) => e.id == id);
        if (matching.length == 0)
            return empty;

        const album = matching[0];
        const items = getAlbumItems(album);
        const info: AlbumVisualInfo = { name: album.name, items: items }
        return info;
    };

    const info = getAlbumInfo();

    return (
        <div className="gallery-view-parent-wrapper">
            <GalleryHeader rightText={info.name} showGoBack={true} />
            <div className="gallery-view-wrapper">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 650: 2, 900: 3}}>
                    <Masonry gutter="30px">
                        { info.items.map((src) => {
                            return <img className="gallery-image" src={src}></img>
                        }) }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
import "assets/gallery.css"
import { albums } from "components/gallery/albums";
import GalleryHeader from "components/gallery/galleryHeader";
import Footer from "pages/landing/footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSearchParams } from "react-router-dom";

interface AlbumVisualInfo {
    name: string,
    items: string[]
}

const Gallery = () => {
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
        const info: AlbumVisualInfo = { name: album.name, items: album.items }
        return info;
    };

    const info = getAlbumInfo();

    return (
        <div className="gallery-view-parent-wrapper">
            <GalleryHeader rightText={info.name} showGoBack={true} />
            <div className="gallery-view-wrapper">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
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
import "assets/album-view.css"
import Album from "components/gallery/album";
import { albums } from "components/gallery/albums";
import GalleryHeader from "components/gallery/galleryHeader";
import Footer from "pages/landing/footer";

const AlbumView = () => {
    return (
        <div className="album-view-parent-wrapper">
            <GalleryHeader rightText="Ceska 10 IB - Albums" showGoBack={false} />
            <div className="album-view-wrapper">
                { albums.map((album) => {
                    return <Album album={album} />
                })}
            </div>
            <Footer />
        </div>
    )
};

export default AlbumView;
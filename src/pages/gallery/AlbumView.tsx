import "assets/album-view.css"
import Album from "components/gallery/Album";
import { albums } from "components/gallery/albums";
import Footer from "components/gallery/Footer";
import GalleryHeader from "components/gallery/GalleryHeader";

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
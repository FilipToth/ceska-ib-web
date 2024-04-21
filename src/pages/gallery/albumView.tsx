import "assets/album-view.css"
import Album from "components/gallery/album";
import GalleryHeader from "components/gallery/galleryHeader";
import Footer from "pages/landing/footer";

const AlbumView = () => {
    return (
        <div className="album-view-parent-wrapper">
            <GalleryHeader />
            <div className="album-view-wrapper">
                <Album name="Test Album... foobar" />
                <Album name="Test Album... foobar" />
            </div>
            <Footer />
        </div>
    )
};

export default AlbumView;
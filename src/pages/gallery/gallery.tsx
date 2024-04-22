import "assets/gallery.css"
import GalleryHeader from "components/gallery/galleryHeader";
import Footer from "pages/landing/footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = ({ name }: { name: string }) => {
    const items = Array.from({ length: 100 }).map((_, i) => {
        const src = `https://picsum.photos/200/${Math.floor(Math.random() * (200 - 100 + 1) + 200)}`;
        return <img src={src} className="gallery-image"></img>
    });

    return (
        <div className="gallery-view-parent-wrapper">
            <GalleryHeader />
            <div className="gallery-view-wrapper">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter="30px">
                        { items }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery
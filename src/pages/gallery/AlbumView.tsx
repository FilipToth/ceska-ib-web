import "assets/album-view.css"
import Album from "components/gallery/Album";
import { albums } from "components/gallery/albums";
import Footer from "components/Footer";
import GalleryHeader from "components/gallery/GalleryHeader";

const AlbumView = () => {
    const gradient = ["#14B5EB", "#D226E1"];

    return (
        <div className="album-view-parent-wrapper">
            <GalleryHeader rightText="Ceska 10 IB - Albums" showGoBack={false} />
            <div className="album-view-wrapper">
                { albums.map((album) => {
                    console.log(album);
                    return <Album album={album} key={album.id} />
                })}
            </div>
            <Footer gradient={gradient} />
        </div>
    )
};

export default AlbumView;
import "assets/album.css"
import { AlbumEntry } from "./albums";
import { redirect } from "utils/helpers";

const Album = ({ album }: { album: AlbumEntry }) => {
    const albumClick = () => {
        redirect(`/gallery?id=${album.id}`);
    };

    return (
        <div className="album-wrapper" onClick={albumClick}>
            <div className="album-cover-wrapper">
                <div className="album-info-wrapper">
                    <p className="album-text album-header">{album.name}</p>
                    <p className="album-text album-subheader">{album.description}</p>
                </div>
            </div>
            <div className="album-images-wrapper">
                { album.items.slice(0, 12).map((item) => {
                    const path = album.thumbsParentDir + item;
                    const image = <img className="album-cover-image" src={path} key={item}></img>
                    return image;
                }) }
            </div>
        </div>
    )
};

export default Album;
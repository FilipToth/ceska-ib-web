import "assets/album.css"
import { AlbumEntry } from "./albums";
import { ReactElement } from "react";
import { redirect } from "utils/helpers";

const Album = ({ album }: { album: AlbumEntry }) => {
    // just render the first 12 elements..
    const images: ReactElement[] = [];
    album.items.splice(0, 12).forEach(item => {
        const path = album.thumbsParentDir + item;
        console.log(path);
        const image = <img className="album-cover-image" src={path}></img>
        images.push(image);
    });

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
                { images }
            </div>
        </div>
    )
};

export default Album;
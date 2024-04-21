import "assets/album.css"

const Album = ({ name }: { name: string }) => {
    return (
        <div className="album-wrapper">
            <div className="album-cover-wrapper">
                <div className="album-info-wrapper">
                    <p className="album-text album-header">{name}</p>
                    <p className="album-text album-subheader">oeufuef</p>
                </div>
            </div>
            <div className="album-images-wrapper">
                <img className="album-cover-image" src="flag.png"></img>
                <img className="album-cover-image" src="sf.jpg"></img>
                <img className="album-cover-image" src="flag.png"></img>
                <img className="album-cover-image" src="sf.jpg"></img>
                <img className="album-cover-image" src="flag.png"></img>
            </div>
        </div>
    )
};

export default Album;
import "assets/gallery-header.css"
import EngagedButton from "components/engagedButton";

const GalleryHeader = () => {
    return (
        <div className="gallery-header-wrapper">
            <EngagedButton text="Go Back" onClick={() => {}} additionalStyle={{ 'padding': '0px 10px' }} />
            <EngagedButton text="IB Home" onClick={() => {}} additionalStyle={{ 'padding': '0px 10px' }} />
        </div>
    )
};

export default GalleryHeader;
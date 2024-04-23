import "assets/gallery-header.css"
import EngagedButton from "components/engagedButton";
import { useNavigate } from "react-router-dom";

const GalleryHeader = ({ rightText, showGoBack }: { rightText: string, showGoBack: boolean }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/albums')
    };

    const ibHomepage = () => {
        navigate('/')
    };

    return (
        <div className="gallery-header-wrapper">
            <div className="gallery-header-left-wrapper">
                { showGoBack && <EngagedButton text="Go Back" onClick={() => goBack()} additionalStyle={{ 'padding': '0px 10px' }} /> }
                <EngagedButton text="IB Home" onClick={() => ibHomepage()} additionalStyle={{ 'padding': '0px 10px' }} />
            </div>
            <p className="gallery-header-text">{ rightText }</p>
        </div>
    )
};

export default GalleryHeader;
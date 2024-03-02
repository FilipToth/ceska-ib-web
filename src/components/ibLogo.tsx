import "assets/ib-logo.css"
import ibLogo from "assets/ib-world-school-logo-2-colour.png"

const IbLogo = () => {
    return (
        <div className="ib-logo-spacer" >
            <div className="ib-logo-wrapper">
                <img className="ib-logo" src={ibLogo}></img>
            </div>
        </div>
    );
};

export default IbLogo;
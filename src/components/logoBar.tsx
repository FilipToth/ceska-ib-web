import "assets/logo-bar.css"
import keyLine from "assets/key-line.svg"
import schoolLogo from 'assets/school-logo.svg'
import ibLogo from "assets/ib-world-school-logo-2-colour.png"

const IbLogo = () => {
    return (
        <div className="logo-wrapper">
            <img className="logo-image" src={ibLogo}></img>
        </div>
    );
};

const SchoolLogo = () => {
    return (
        <div className="logo-wrapper">
            <img className="logo-image" src={schoolLogo}></img>
        </div>
    );
};

const LogoBar = ({ wrapperStyle }: { wrapperStyle: React.CSSProperties }) => {
    return (
        <div style={wrapperStyle}>
            <div className="logo-bar-wrapper">
                <SchoolLogo />
                <img className="logo-key-line" src={keyLine}></img>
                <IbLogo />
            </div>
        </div>
    );
};

export default LogoBar;
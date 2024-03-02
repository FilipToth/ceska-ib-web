import "assets/landing-footer.css"
import schoolLogo from 'assets/school-logo.png'
import IbLogo from "components/ibLogo"

const Footer = () => {
    return (
        <div className="footer-page-wrapper">
            <div className="footer-wrapper">
                <div className="footer-content-wrapper">
                    <div className="footer-content-group">
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                    </div>
                    <div className="footer-content-group">
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                    </div>
                    <div className="footer-content-group">
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                    </div>
                    <div className="footer-content-group">
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                        <p className="footer-content-text">About Us</p>
                    </div>
                </div>
                <div className="footer-bottom-wrapper">
                    <p className="school-name-text">© 2024 Sukromne Bilingvalne Gymnazium Ceska 10</p>
                    <div className="footer-bottom-right-wrapper">
                        <div className="school-logo-wrapper">
                            <img className="school-logo" src={schoolLogo}></img>
                        </div>
                        <IbLogo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import "assets/landing-footer.css"
import schoolLogo from 'assets/school-logo.png'
import ibLogo from 'assets/ib-world-school-logo-2-colour.png'

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
                        <div className="ib-logo-spacer" >
                            <div className="ib-logo-wrapper">
                                <img className="ib-logo" src={ibLogo}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
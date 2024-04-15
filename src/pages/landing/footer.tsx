import "assets/landing-footer.css"
import phoneIcon from "assets/phone.png"
import emailIcon from "assets/email.png"
import LogoBar from "components/logoBar";

const Footer = () => {
    return (
        <div className="footer-page-wrapper">
            <div className="footer-wrapper">
                {/* <div className="footer-content-wrapper">
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
                </div> */}
                <div className="footer-bottom-wrapper">
                    <div>
                        <p className="school-name-text">© 2024 Súkromné Gymnázium Česká 10</p>
                        <div className="footer-contact-list-wrapper">
                            <div className="footer-contact-wrapper">
                                <img className="contact-icon" src={emailIcon}></img>
                                <p className="school-name-subtext">Head of Shcool: babic.sgc@gmail.com</p>
                            </div>
                            <div className="footer-contact-wrapper">
                                <img className="contact-icon" src={emailIcon}></img>
                                <p className="school-name-subtext">IBDP Coordinator: sveta.fedoseeva@gmail.com</p>
                            </div>
                            <div className="footer-contact-wrapper">
                                <img className="contact-icon" src={phoneIcon}></img>
                                <p className="school-name-subtext">+421 904 979 681</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-right-wrapper">
                        <LogoBar wrapperStyle={{}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
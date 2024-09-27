import "assets/landing-footer.css"
import phoneIcon from "assets/phone.png"
import emailIcon from "assets/email.png"
import LogoBar from "components/logoBar";
import React from "react";

const Footer = ({ gradient }: { gradient: string[] }) => {
    if (gradient.length != 2) {
        gradient = ["#14B5EB", "#D226E1"]
    }

    const style: React.CSSProperties = {
        "background": `linear-gradient(89.83deg, ${gradient[0]} 3.77%, ${gradient[1]}  92.26%)`,
        "clipPath": "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)",
        "paddingTop": "12vh",
        "height": "auto",
    };

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
                <div className="footer-bottom-wrapper" style={style}>
                    <div className="footer-bottom-vertical-split">
                        <div>
                            <div className="footer-contact-list-wrapper">
                                <div className="footer-contact-wrapper">
                                    <img className="contact-icon" src={emailIcon}></img>
                                    <p className="school-name-subtext">Head of School: juraj.babic@gymnaziumceska.sk</p>
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
                        <LogoBar wrapperStyle={{}} />
                    </div>
                    <div className="footer-bottom-copyright-wrapper">
                        <p className="school-name-text">© 2024 Súkromné Gymnázium Česká 10</p>
                        <p className="school-name-text">Designed by IB DP Students</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
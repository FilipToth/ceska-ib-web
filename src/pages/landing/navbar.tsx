import "assets/landing-navbar.css"
import flag from 'assets/un_flag.webp'
import ibLogo from 'assets/ib-world-school-logo-2-colour.png'

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="ib-logo-spacer" >
                <div className="ib-logo-wrapper">
                    <img className="ib-logo" src={ibLogo}></img>
                </div>
            </div>
            <div className="navbar">
                <p className="navbar-text">About Us</p>
                <p className="navbar-text">Apply Now</p>
                <p className="navbar-text">For Students</p>
                <p className="navbar-text">For Parents</p>
                <p className="navbar-text">Events</p>
            </div>
            <div className="language-picker-wrapper">
                <img className="flag" src={flag}></img>
                <p className="language-text">EN</p>
            </div>
        </div>
    );
};

export default Navbar;
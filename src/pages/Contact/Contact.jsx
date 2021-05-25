import developerIcon from "./developer.svg";
import addressIcon from "./pin.svg";
import phoneIcon from "./telephone.svg";
import emailIcon from "./mail.svg";

import "./Contact.css";

export function Contact() {
    return (
        <div className="contact">
            <div className="left-details">
                <div className="contactName">
                    <h2>ANDREEA</h2>
                    <h2>VICSAI</h2>
                </div>
                <div className="contactTitle">
                    <h3>Junior Front-End Web Developer</h3>
                </div>
                <div className="contactIcon">
                    <img src={developerIcon} alt="developer-icon" />
                </div>
            </div>
            <div className="right-details">
                <div className="contactAddress">
                    <img src={addressIcon} alt="address" />
                    <p>Baia Mare, Romania</p>
                </div>
                <div className="contactPhone">
                    <img src={phoneIcon} alt="phone" />
                    <p>+40743997414</p>
                </div>
                <div className="contactEmail">
                    <img src={emailIcon} alt="email" />
                    <p>andreeahidigan6@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
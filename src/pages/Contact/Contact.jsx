import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

import developerIcon from "./developer.svg";
import addressIcon from "./pin.svg";
import phoneIcon from "./telephone.svg";
import emailIcon from "./mail.svg";

import "./Contact.css";

export function Contact() {
    return (
        <div className="contact">
            <Fade left cascade>
                <div className="contact-nav-bar"></div>
            </Fade>
            <div className="contact-details">
                <div className="left-details">
                    <LightSpeed left cascade>
                        <div className="contactName">
                            <h2>ANDREEA</h2>
                            <h2>VICSAI</h2>
                        </div>
                    </LightSpeed>
                    <LightSpeed left cascade>
                        <div className="contactTitle">
                            <h3>Junior Front-End Web Developer</h3>
                        </div>
                    </LightSpeed>
                    <Rotate bottom left>
                        <div className="contactIcon">
                            <img src={developerIcon} alt="developer-icon" />
                        </div>
                    </Rotate>
                </div>
                <LightSpeed right cascade>
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
                </LightSpeed>
            </div>
        </div>
    );
}
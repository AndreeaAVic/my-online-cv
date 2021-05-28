import Fade from "react-reveal/Fade";

import "./Recommendations.css";

export function Recommendations() {
    return (
        <div className="recommendations">
            <Fade left cascade>
                <div className="recommendations-nav-bar"></div>
            </Fade>
            <Fade left>
                <div className="intro-recommendation">
                    <p><i>aaaaaaa</i></p>
                    <p>Adrian Moldovan - Mentor</p> 
                    <a href="https://scoalainformala.ro/our_team/adrian-moldovan/">@The Informal School of IT</a>
                    <p>& Co-Owner and Co-Founder @Codern Venture</p>
                </div>
            </Fade>
            <Fade right>
                <div className="front-end-recommendation">
                    <p><i>aaaaaaa</i></p>
                    <p>Stefan Radusi - Mentor</p> 
                    <a href="https://scoalainformala.ro/our_team/stefan-radusi/">@The Informal School of IT</a>
                    <p>& Web User Interface Developer</p>
                </div>
            </Fade>
        </div>
    );
}
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
                    <p>
                        <i>
                            I had the opportunity to work with Andreea as her mentor during her Intro in IT course at The Informal School of IT.
                        </i>
                    </p>
                    <p>
                        <i>
                            She was one of my best students, and she staggered me with her determination, self discipline and work ethic.
                        </i>
                    </p>
                    <p>
                        <i>
                            She is an extremely passionate web developer, concerned not only about aspects regarding UI/UX, but also about carefully
                            writing clean, scalable code. Working with her was a pleasure, I recommend Andreea with all my heart, and I know she will 
                            become a great programmer and a valuable asset for any IT development team.
                        </i>
                    </p>
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
import Fade from "react-reveal/Fade";

import programmingIcon from "./programming.png";
import targetIcon from "./target.png";
import goalsIcon from "./ladder.png";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";

import "./About.css";

export function About() {
    return (
        <div className="about">
            <Fade left cascade>
                <div className="about-nav-bar"></div>
            </Fade>
            <ProfilePicture />
            <div className="description">
                <Fade right cascade>
                    <p>Hello!</p> 
                    <p>My name is Andreea, I'm newly initiated to front-end web development concepts</p> 
                    <p>and I'm eager for an every day use of them for I have crossed the line from curiosity to passion.</p>
                    <p>So,</p>
                    <p>curiosity led me here,</p>
                    <p>knowledge I have achieved,</p>
                    <p>passion I have embraced!</p>
                </Fade>
                <span>
                    <Fade left>
                        <img src={programmingIcon} alt="programming" id="programmingIcon" />
                    </Fade>
                    <Fade right cascade>
                        <p>Coding?</p>
                    </Fade>
                </span>
                <Fade right cascade>
                    <p>Future lifestyle!</p>
                </Fade>
                <span>
                    <Fade left>
                        <img src={goalsIcon} alt="goals" id="goalsIcon" />
                    </Fade>
                    <Fade right cascade>
                        <p>Goals?</p>
                    </Fade>
                </span>
                <Fade right cascade>
                    <p>Deepening the concepts, as well as learning new ones.</p>
                </Fade>
                <span>
                    <Fade left>
                        <img src={targetIcon} alt="target" id="targetIcon" />
                    </Fade>
                    <Fade right cascade>
                        <p>Target?</p>
                    </Fade>
                </span>
                <Fade right cascade>
                    <p>Becoming a full-time front-end web developer.</p>
                    <p>Also, friendly person, a little bit shy, nevertheless I hardly say no to challenges, to good/recommended/gift books or to playing board games.</p>
                </Fade>
            </div>
        </div>
    );
}
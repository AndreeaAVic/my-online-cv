import programmingIcon from "./programming.png";
import targetIcon from "./target.png";
import goalsIcon from "./ladder.png";

import "./About.css";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";

export function About() {
    return (
        <div className="about">
            <ProfilePicture />
            <div className="description">
                <p>Hello!</p> 
                <p>My name is Andreea, I'm newly initiated to front-end web development concepts</p> 
                <p>and I'm eager for an every day use of them for I have crossed the line from curiosity to passion.</p>
                <p>So,</p>
                <p>curiosity led me here,</p>
                <p>knowledge I have achieved,</p>
                <p>passion I have embraced!</p>
                <span>
                    <img src={programmingIcon} alt="programming" id="programmingIcon" />
                    <p>Coding?</p>
                </span>
                <p>Future lifestyle!</p>
                <span>
                    <img src={goalsIcon} alt="goals" id="goalsIcon" />
                    <p>Goals?</p>
                </span>
                <p>Deepening the concepts, as well as learning new ones.</p>
                <span>
                    <img src={targetIcon} alt="target" id="targetIcon" />
                    <p>Target?</p>
                </span>
                <p>Becoming a full-time front-end web developer.</p>
                <p>Also, friendly person, a little bit shy, nevertheless I hardly say no to challenges, to good/recommended/gift books or to playing board games.</p>
            </div>
        </div>
        // <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        // <div>Icons made by <a href="" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    );
}
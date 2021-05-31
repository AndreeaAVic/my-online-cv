import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

import cvProjectIcon from "./projectPic1.png";
import gameProjectIcon from "./rockPaperScissors.png";

import "./Projects.css";

export function Projects() {
    return (
        <div className="projects">
            <Fade left cascade>
                <div className="projects-nav-bar"></div>
            </Fade>
            <Rotate top left>
                <div className="cv-project">
                    <img src={cvProjectIcon} alt="project" />
                </div>
            </Rotate>
            <Rotate bottom right>
                <div className="game-project">
                    <img src={gameProjectIcon} alt="game" />
                </div>
            </Rotate>
        </div>
    );
}
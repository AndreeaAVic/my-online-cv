import Flip from "react-reveal/Flip";

import htmlIcon from "./html5.svg";
import cssIcon from "./css3.svg";
import javascriptIcon from "./javascript.png";
import reactIcon from "./react.svg";
import helloworldIcon from "./helloworld.png";
import personalGameIcon from "./rockPaperScissors.png";

import "./Skills.css";

export function Skills() {
    return (
        <div className="skills">
            <Flip top cascade>
                <div className="skillsText">
                    <p>From</p>
                    <img src={helloworldIcon} alt="hello" id="hello" />
                    <p>to</p>
                    <img src={personalGameIcon} alt="game" id="game" />
                    <p>rocking the world!</p>
                </div>
                <div className="skillsIcons">
                    <p>KNOWLEDGE</p>
                    <img src={htmlIcon} alt="html5" />
                    <img src={cssIcon} alt="css3" />
                    <img src={javascriptIcon} alt="javascript" id="js" />
                    <img src={reactIcon} alt="react" />
                </div>
            </Flip>
        </div>
    );
}
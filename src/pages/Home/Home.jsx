import Fade from "react-reveal/Fade";
import { BackgroundPattern } from "../../components/BackgroundPattern/BackgroundPattern";

import "./Home.css";

export function Home() {
    return (
        <div className="home">
            <BackgroundPattern />
            <div className="job-title">
                <Fade left cascade>
                    <p>Junior Front-End Web Developer</p>
                </Fade>
            </div>
        </div>
    );
}
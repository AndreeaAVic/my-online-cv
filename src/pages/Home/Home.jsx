import Fade from "react-reveal/Fade";

import { BackgroundPattern } from "../../components/BackgroundPattern/BackgroundPattern";

import "./Home.css";

export function Home() {
    return (
        <div className="home">
            <Fade left cascade>
                <div className="home-nav-bar"></div>
            </Fade>
            <BackgroundPattern />
            <div className="job-title">
                <Fade left cascade>
                    <p>Junior Front-End Web Developer</p>
                </Fade>
            </div>
        </div>
    );
}
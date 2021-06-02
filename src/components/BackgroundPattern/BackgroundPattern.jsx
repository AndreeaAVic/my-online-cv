import backgroundPattern from "./background-pattern.png";

import "./BackgroundPattern.css";

export function BackgroundPattern() {
    return (
        <img src={backgroundPattern} alt="pattern" id="patternImg" />
    );
}
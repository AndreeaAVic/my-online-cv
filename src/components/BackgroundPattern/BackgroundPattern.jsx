import backgroundPattern from "./background-pattern.png";

import "./BackgroundPattern.css";

export function BackgroundPattern() {
    return (
        <img src={backgroundPattern} alt="pattern" id="patternImg" />
        //  <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com</a>
    )
}
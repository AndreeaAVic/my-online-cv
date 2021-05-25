import { Link } from "react-router-dom";
import { SocialMedia } from "../SocialMedia/SocialMedia";

import "./Header.css";

export function Header() {
    return (
        <div className="header">
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <SocialMedia />
        </div>
    );
}
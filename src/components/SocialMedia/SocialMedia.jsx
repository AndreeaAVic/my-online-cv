import linkedinIcon from "./linkedin.svg";
import githubIcon from "./github.svg";
import facebookIcon from "./facebook.svg";

import "./SocialMedia.css";

export function SocialMedia() {
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/andreea-vicsai-779519154/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="linkedin-icon" id="linkedin-icon" />
            </a>
            <a href="https://github.com/AndreeaAVic" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="github-icon" id="github-icon" />
            </a>
            <a href="https://www.facebook.com/andreea.hidigan" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="facebook-icon" id="facebook-icon" />
            </a>
        </div>
    );
}
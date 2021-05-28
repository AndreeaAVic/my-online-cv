import Fade from "react-reveal/Fade";
import profilePicture from "./profilePicture.jpg";

import "./ProfilePicture.css";

export function ProfilePicture() {
    return (
        <Fade left>
            <div className="profilePic">
                <img src={profilePicture} alt="profile" id="profile-picture" />
            </div>
        </Fade>
    );
}

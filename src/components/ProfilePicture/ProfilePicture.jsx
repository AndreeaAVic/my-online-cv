import profilePicture from "./profilePicture.jpg";

import "./ProfilePicture.css";

export function ProfilePicture() {
    return (
        <div className="profilePic">
            <img src={profilePicture} alt="profile" id="profile-picture" />
        </div>
    );
}

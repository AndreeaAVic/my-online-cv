import { Link } from "react-router-dom";

import "./AVButton.css";

export function AVButton() {
    return (    
        <div className="av-button">
            <Link to="/about">Andreea Vicsai</Link>
        </div>
    );
}
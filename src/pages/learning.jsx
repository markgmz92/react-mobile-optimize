import React from "react";
import { Link } from "react-router-dom";


const LearningPage = () => {
    return (
    <div>
        <h3>My Learning Materials</h3>
        <small>Title:</small>
        <small>Minute Read:</small>
        <small>Total views:</small>
        <Link to ="/"> Profile</Link>
        <Link to ="/users"> Show List Of Mentors</Link>
    </div>
    );
};

export default LearningPage;
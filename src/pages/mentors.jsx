import React from "react";

const MentorPage = () => {
    return (
    <div>
    <ul>
        {["Alex", "John", "Matt", "Mark"].map((mentor, idx) => {
            return <li key={idx}>{mentor}</li>
        })}
    </ul>
    </div>
    );
};

export default MentorPage;
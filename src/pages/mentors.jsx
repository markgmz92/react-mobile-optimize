import React, { Component } from "react";
import { Card, CardTitle, CardHeader, Container } from 'reactstrap';
import SlideView from "../components/SlideView/index.js";
import Avatar from "../components/Avatar/index.js"

const MentorPage = ( props ) => {
    return (
    <div>
    <nav className ="top-header">
        <h5>Entreprenuers Malaysia</h5>
    </nav>
        <div>
            <Card className = "mentor-profile">
            <Avatar />
            <div class="content">
            <div class ="header">Steve Jobs</div>
            </div>
            </Card>
        </div>
        <div>
            <Card className = "mentor-profile">
            <Avatar />
            <h2> My Mentors</h2>
            </Card>
        </div>
        <div>
            <Card className = "mentor-profile">
            <Avatar />
            <h2> My Mentors</h2>
            </Card>
        </div>
        
        <div>
            <nav className ="mentor-footer">
            <h4>Footer</h4>
            </nav>
        </div>
        </div>
    );
};

export default MentorPage;
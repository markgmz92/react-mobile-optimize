import React, { Component } from "react";
import { Card, CardTitle, CardHeader, Container } from 'reactstrap';
import SlideView from "../components/SlideView/index.js";
import LearningFeed from "../components/LearningFeed/index.js";
import { CardContent } from "semantic-ui-react";
import Avatar from "../components/Avatar/index.js"


const ProfilePage = ( props ) => {
    return (
    <div>
    <nav className ="top-header">
        <h5>Entreprenuers Malaysia</h5>
    </nav>
    <Card className="upcoming-events">
        <CardHeader><span>Upcoming Events
        </span>
        </CardHeader>
    </Card>
        <div>
            <Card className = "activity-feed">
                <Container fluid>
                <Avatar/>
                <CardHeader id = "user-name">Mark Gomez</CardHeader>
                <CardContent>Last Session: </CardContent>
                </Container>
                <div id="rectangle">
                 <Card>    
                 </Card>   
                </div>
            </Card>
        </div>

        <div>
            <Card className = "mentor-slider">
            <h2> My Mentors</h2>
            <SlideView />
            <h3>Click here to view full profile</h3>
            </Card>
        </div>
        <div>
            <Card className = "learning-feed">
            <h2> Learning Feed</h2>
            <LearningFeed />
            </Card>
        </div>

        <div>
            <nav className ="bottom-footer">
            <i class="home icon"></i>
            <i class="comment outline icon"></i>
            </nav>
        </div>
        </div>
    );
};

export default ProfilePage;
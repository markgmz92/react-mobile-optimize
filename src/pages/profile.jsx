import React, { Component } from "react";
import { Card, CardTitle, CardHeader, Container } from 'reactstrap';
import SlideView from "../components/SlideView/index.js";

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
                    <h2>Your activity feed</h2>
                </Container>
            </Card>
        </div>

        <div>
            <Card className = "mentor-slider">
            <h2> My Mentors</h2>
            <SlideView />
            </Card>
        </div>
            <nav className ="bottom-footer">
        <h4>Footer</h4>
        
    </nav>
        </div>
    );
};

export default ProfilePage;
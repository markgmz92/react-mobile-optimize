import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Button, Card, CardTitle, CardHeader, Container } from 'reactstrap';
import SlideView from "../components/SlideView/index.js";
import LearningFeed from "../components/LearningFeed/index.js";
import { CardContent } from "semantic-ui-react";
import { Image } from 'semantic-ui-react'
 
const ProfilePage = ( props ) => {
    return (
    <div>
    <nav className ="top-header">
        <h5>Entreprenuers Malaysia</h5>
        <Image id="Avatar-header" src= {"https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"} alt="user-name"size="micro" class= "ui avatar image" avatar/>
    </nav>
    <Card className="upcoming-events">
        <CardHeader><span>No Scheduled Events This Week
        </span>
        </CardHeader>
    </Card>
        <div>
            <Card className = "activity-feed">
                <i class="home icon-activity-feed"></i>
                <Container fluid>
                <Image id="Avatar" src= {"https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"} alt="user-name"size="tiny" class= "ui avatar image" avatar/>
                <CardHeader id = "user-name"> Mark Gomez</CardHeader>
                <br></br>
                <CardContent> Place of Study:Segi</CardContent>
                <br></br>
                <CardContent>Last Session:10/11/2019 </CardContent>
                <CardContent><Button color="primary" id="appointment-button">Create Appointment</Button></CardContent>
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
            <NavLink activeClassName="active" to="/mentors">
            <h3>Click here to view mentor page</h3>
            </NavLink>
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
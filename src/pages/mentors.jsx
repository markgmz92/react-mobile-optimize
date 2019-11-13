import React, { Component } from "react";
import { Card, CardTitle, CardHeader, Container } from 'reactstrap';
import SlideView from "../components/SlideView/index.js";
import { CardContent } from "semantic-ui-react";
import { Image } from 'semantic-ui-react'

const MentorPage = ( props ) => {
    return (
    <div>
    <nav className ="top-header">
        <h5>Entrepreneurs Malaysia</h5>
        <Image id="Avatar-header" src= {"https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"} alt="user-name"size="micro" class= "ui avatar image" avatar/>
    </nav>
        <div>
            <Card className = "mentor-profile">
            <CardContent>
                <div>
                <Image id="avatar-mentor" src= {"https://i1.wp.com/quoteamo.com/wp-content/uploads/2016/08/steve-jobs.jpg"} alt="user-name"size="tiny" class= "ui avatar image" avatar/>
                </div>
                <text>Name: Steve Jobs</text>
                <br></br>
                <text>Profression: Entrepreneur</text>
                <br></br>
                <text>Company: Apple</text>
                <br></br>
                <text>Profile Intro: American Entrepenuer.</text>
                <br></br>
                <text>Skills: Business Management</text>
            </CardContent>
            </Card>
        </div>
        <div>
            <Card className = "mentor-profile">
            <CardContent>
            <div>
            <Image id="avatar-mentor" src= {"https://www.sapeople.com/wp-content/uploads/2015/09/elon-th.jpg"} alt="user-name"size="tiny" class= "ui avatar image" avatar/>
            </div>
                <text>Name: Elon Musk</text>
                <br></br>
                <text>Profression: Engineer</text>
                <br></br>
                <text>Company: Tesla</text>
                <br></br>
                <text>Profile Intro: South African billionaire.</text>
                <br></br>
                <text>Skills: Programming</text>
            </CardContent>
            </Card>
        </div>
      
        
        <div>
            <nav className ="mentor-footer">
            <i class="home icon" size="big"></i>
            <i class="comment outline icon"></i>
            </nav>
        </div>
        </div>
    );
};

export default MentorPage;
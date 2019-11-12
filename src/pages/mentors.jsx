import React from "react";
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const MentorPage = (props ) => {
    return (
    <div>
    <Card>
        <CardImg id="image" top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody className="mentor">
          <CardTitle>Name</CardTitle>
          <CardTitle>Profession</CardTitle>
          <CardTitle>Company</CardTitle>
          <CardTitle>Profile Intro</CardTitle>
          <CardTitle>Skills</CardTitle>
        </CardBody>
    </Card>
    <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody className="mentor">
          <CardTitle>Name</CardTitle>
          <CardTitle>Profession</CardTitle>
          <CardTitle>Profile Intro</CardTitle>
          <CardTitle>Skills</CardTitle>
        </CardBody>
    </Card>
    <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody className="mentor">
          <CardTitle>Name</CardTitle>
          <CardTitle>Profession</CardTitle>
          <CardTitle>Profile Intro</CardTitle>
          <CardTitle>Skills</CardTitle>
        </CardBody>
    </Card>
    </div>
    );
};

export default MentorPage;
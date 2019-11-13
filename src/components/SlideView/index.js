import React from 'react';
import { Card, CardTitle, CardHeader, Container } from 'reactstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react'

const Wrapper = styled.div`
        width: 100%;
        padding: 10px;
        margin: 20px;
`;

const Header = styled.div`
        width: 100px;
        padding: 10px;
        margin: 20px;
`;
export default class SlideView extends React.Component {
    render() {
        return (
            <Wrapper>
                <Slider
                    autoplay={true}
                    speed={300}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                >
                <Header className= "caption">
                <Image id="Avatar" src= {"https://i1.wp.com/quoteamo.com/wp-content/uploads/2016/08/steve-jobs.jpg"} alt="user-name"size="tiny" class= "ui avatar image" avatar/>
                <text>Name: Steve Jobs</text>
                <br></br>
                <text>Profression: Entrepreneur</text>
                <br></br>
                <text>Company: Apple</text>
                <br></br>
                <text>Last Session Date: 10/11/2019</text>
                <br></br>
                </Header>
                <Header className= "caption">
                <Image id="Avatar" src= {"https://www.sapeople.com/wp-content/uploads/2015/09/elon-th.jpg"} alt="user-name"size="tiny" class= "ui avatar image" avatar/>
                <text>Name: Elon Musk</text>
                <br></br>
                <text>Profression: Engineer</text>
                <br></br>
                <text>Company: Tesla</text>
                <br></br>
                <text>Last Session Date: 9/11/2019</text>
                <br></br>
                </Header>
                
                </Slider>
            </Wrapper>

        );
    }
}
import React from 'react';
import { Card, CardTitle, CardHeader, Container } from 'reactstrap';
import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
        width: 100%;
        padding: 10px;
        margin: 20px;
`;

const Header = styled.div`
        width: 100%;
        padding: 10px;
        margin: 20px;
`;
export default class LearningFeed extends React.Component {
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
                <text>Title:</text>
                <text>Minute Read:</text>
                <text>Total Views</text>
                </Header>
                <Header className= "caption">
                <text>Title:</text>
                <text>Minute Read:</text>
                <text>Total Views</text>
                </Header>
                <Header className= "caption">
                <text>Title:</text>
                <text>Minute Read:</text>
                <text>Total Views</text>
                </Header>
                </Slider>
            </Wrapper>

        );
    }
}
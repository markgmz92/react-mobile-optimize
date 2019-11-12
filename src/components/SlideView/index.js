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
export default class SlideView extends React.Component {
    render() {
        return (
            <Wrapper>
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
                >
                <Header className= "caption">
                <text>Name:Mentor Two</text>
                <text>Profression:</text>
                <text>Company:</text>
                <text>Last Session Date:</text>
                </Header>
                <Header className= "caption">
                <text>Name:Mentor Two</text>
                <text>Profression:</text>
                <text>Company:</text>
                <text>Last Session Date:</text>
                </Header>
                <Header className= "caption">
                <text>Name:Mentor Two</text>
                <text>Profression:</text>
                <text>Company:</text>
                <text>Last Session Date:</text>
                </Header>
                </Slider>
            </Wrapper>

        );
    }
}
import React from 'react';
import { Card, CardTitle, CardHeader, Container } from 'reactstrap';
import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
        width: 100%;
        padding: 0.25px;
        margin: 20px;
`;

const Header = styled.div`
        width: 100%;
        padding: 0.25px;
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
                <Header>
                <h1>Name:Mentor One</h1>
                <h3>Profression:</h3>
                <h3>Company:</h3>
                <h4>Last Session Date:</h4>
                </Header>
                <Header>
                <h1>Name:Mentor Two</h1>
                <h3>Profression:</h3>
                <h3>Company:</h3>
                <h4>Last Session Date:</h4>
                </Header>
                <Header>
                <h1>Name:Mentor Two</h1>
                <h3>Profression:</h3>
                <h3>Company:</h3>
                <h4>Last Session Date:</h4>
                </Header>
                </Slider>
            </Wrapper>

        );
    }
}
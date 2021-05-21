import React from 'react';
import styled from 'styled-components';

import Background from '../assets/images/bg-stars.svg';
import Footer from './Footer';
import Timer from './Timer';

const Container = styled.div`
    background-image: url(${Background});
    background-color: black;
    height: 100vh;
    width: 100vw;
`;

const Counter = () => {
    return (
        <Container>
            <Timer />
            <Footer />
        </Container>
    )
};

export default Counter;

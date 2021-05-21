import React from 'react';
import styled from 'styled-components';

import Background from '../assets/images/pattern-hills.svg';
import Instagram from '../assets/images/instagram.svg';
import Facebook from '../assets/images/facebook.svg';
import Pinterest from '../assets/images/pinterest.svg';

const Container = styled.div`
    width: 100%;
    height: 30vh;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SocialsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    img {
        cursor: pointer;
        border-radius: 4px;

        &:hover {
            filter: hue-rotate(90deg);
        }
    }
`;

const Footer = () => {
    return (
        <Container>
            <SocialsContainer>
                <img src={Facebook} alt="facebook" />
                <img src={Pinterest} alt="pinterest" />
                <img src={Instagram} alt="instagram" />
            </SocialsContainer>
        </Container>
    )
}

export default Footer

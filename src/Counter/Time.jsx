import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    height: 150px;
    width: 150px;
    background-color: transparent;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    overflow: hidden;

    .top-section {
        position: absolute;
        background-color: #2c2c44;
        backface-visibility: visible;
        transform-style: preserve-3d;
        perspective: 600px;
        height: 50%;
        width: 100%;
        top: 0;
        left: 0;
    }

    .bottom-section {
        position: absolute;
        background-color: #2c2c44;
        height: 50%;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    .text {
        color: #d4506f;
        font-size: 72px;
        font-weight: bold;
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 2;
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: black;
        opacity: 0.5;
    }

    .seperator-left {
        position: absolute;
        left: -8px;
        top: 67px;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: black;
    }

    .seperator-right {
        position: absolute;
        right: -8px;
        top: 67px;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: black;
    }
`;

const Time = ({ text }) => {
    return (
        <Container
            animate={{
                // rotateX: [0, 180]
            }}
        >
            <span className='text'>{text}</span>
            <motion.div
                perspective={400}
                className='top-section'
                // initial={{
                //     rotateX: 90,
                //     transformOrigin: '50% 0%',
                // }}
                animate={{
                    rotateX: -180,
                    // scale: [1,2,1],
                    perspective: [400, 1600, 400],
                    // perspectiveOrigin: '50% 50%',
                    transformOrigin: 'bottom center'
                }}
                transition={{duration: 2}}
            />
            <span className='text'>{text}</span>
            <div className='bottom-section' />
            <span className='seperator-left' />
            <span className='seperator-right' />
        </Container>
    )
}

export default Time;

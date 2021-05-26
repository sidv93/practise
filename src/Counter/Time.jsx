import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    height: 150px;
    width: 150px;
    background-color: #2c2c44;
    border-radius: 8px;
    position: relative;
    perspective: 300px;

    &:before {
        content: '';
        position: absolute;
        top: 47%;
        left: -6px;
        background-color: black;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        z-index: 2;
    }

    &:after {
        content: '';
        position: absolute;
        top: 47%;
        right: -6px;
        background-color: black;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        z-index: 2;
    }

    .uppercard, .lowercard {
        display: flex;
        position: relative;
        justify-content: center;
        width: 100%;
        height: 50%;
        overflow: hidden;
        border: 1px solid black;

        span {
            color: #d4506f;
            font-size: 72px;
            font-weight: bold;
        }
    }

    .uppercard {
        align-items: flex-end;
        border-bottom: 0.5px solid black;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

        span {
            transform: translateY(50%);
        }
    }

    .lowercard {
        align-items: flex-start;
        border-bottom: 0.5px solid black;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

        span {
            transform: translateY(-50%);
        }
    }

    .flipcard {
        display: flex;
        justify-content: center;
        position: absolute;
        left: 0;
        width: 100%;
        height: 50%;
        overflow: hidden;
        backface-visibility: hidden;

        span {
            color: #d4506f;
            font-size: 72px;
            font-weight: bold;
        }

        &.unfold {
            top: 50%;
            align-items: flex-start;
            transform-origin: 50% 0%;
            transform: rotateX(180deg); // from 180 to 0
            background-color: #2c2c44;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            border: 0.5px solid black;
            border-top: 0.5px solid black;
            transform-style: preserve-3d;
            animation: unfold 0.6s ease-in;

            @keyframes unfold {
                0% {
                    transform: rotateX(180deg);
                }
                100% {
                    transform: rotateX(0deg);
                }
            }
		
            span {
                transform: translateY(-50%);
            }
        }

        &.fold {
            top: 0%;
            align-items: flex-end;
            transform-origin: 50% 100%;
            transform: rotateX(0deg); // from 0 to -180
            background-color: #2c2c44;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border: 0.5px solid black;
            border-bottom: 0.5px solid black;
            transform-style: preserve-3d;
            animation: fold 0.6s ease-in;

            @keyframes fold {
                0% {
                    transform: rotateX(0);
                }
                100% {
                    transform: rotateX(-180deg);
                }
            }
		
            span {
                transform: translateY(50%);
            }
        }	
    }
`;

const Time = ({ text }) => {
    const [animation1, setAnimation1] = useState('fold');
    const [animation2, setAnimation2] = useState('unfold');
    useEffect(() => {
        setAnimation1((ani) => ani === 'fold' ? 'unfold' : 'fold');
        setAnimation2((ani) => ani === 'fold' ? 'unfold' : 'fold');
    }, [text]);
    return (
        <Container>
            <div className="uppercard">
                <span>{text}</span>
            </div>
            <div className="lowercard">
                <span>{text}</span>
            </div>
            <div className={`flipcard ${animation1}`}>
                <span>{text}</span>
            </div>
            <div className={`flipcard ${animation2}`}>
                <span>{text}</span>
            </div>
        </Container>
    )
}

export default Time;

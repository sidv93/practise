import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Time from './Time';

const Container = styled.div`
    background: transparent;
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;
const Title = styled.h2`
    text-transform: uppercase;
    font-size: 36px;
    color: white;
    letter-spacing: 4px;
    background-blend-mode: darken;
`;
const Clock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const TimesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`;
const TimeTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const TimeText = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    color: #807d95;
    letter-spacing: 2px;
    width: 150px;
    text-align: center;
`;

const Timer = () => {
    const [days, setDays] = useState(8);
    const [hours, setHours] = useState(23);
    const [minutes, setMinutes] = useState(55);
    const [seconds, setSeconds] = useState(5);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((sec) => (sec === 0 ? 60 : sec - 1));
            if (seconds === 0) {
                setMinutes((min) => (min === 0 ? 60 : min - 1))
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);
    return (
        <Container>
            <Title>
                We're launching soon
            </Title>
            <Clock>
                <TimesWrapper>
                    <Time text={days} />
                    <Time text={hours} />
                    <Time text={minutes} />
                    <Time text={seconds} />
                </TimesWrapper>
                <TimeTextWrapper>
                    <TimeText>Days</TimeText>
                    <TimeText>Hours</TimeText>
                    <TimeText>Minutes</TimeText>
                    <TimeText>Seconds</TimeText>
                </TimeTextWrapper>
            </Clock>
        </Container>
    )
}

export default Timer;

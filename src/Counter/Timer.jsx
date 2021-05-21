import React from 'react';
import styled from 'styled-components';

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
const Time = styled.div`
    height: 150px;
    width: 150px;
    background-color: #2c2c44;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #d4506f;
    font-size: 72px;
    font-weight: bold;
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
    return (
        <Container>
            <Title>
                We're launching soon
            </Title>
            <Clock>
               <TimesWrapper>
                   <Time>08</Time>
                   <Time>23</Time>
                   <Time>55</Time>
                   <Time>41</Time>
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

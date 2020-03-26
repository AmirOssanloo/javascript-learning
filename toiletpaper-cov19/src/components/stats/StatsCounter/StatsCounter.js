import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
import StatsParticles from './StatsParticles';

const StatsCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 16rem;
  height: 8.5rem;
  background: rgb(195, 185, 156);
  background: linear-gradient(0deg, rgba(195, 185, 156, 0.2) 0%, rgba(195, 185, 156, 0) 100%);
  text-align: center;

  &:not(last-child) {
    margin-right: 0.4rem;
  }
`;

const StatsCanvas = styled.canvas`
  position: absolute;
  width: inherit;
  height: inherit;
`;

const StatsDisplay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: inherit;
`;

const StatsCounterNumber = styled.span`
  color: #fff;
  font-size: 3.2rem;
`;

const StatsCounterLabel = styled.span`
  color: #c3b99c;
  font-size: 1.2rem;
`;

const StatsCounter = ({ number, label }) => {
  const canvasRef = createRef();
  const numberRef = createRef();

  useEffect(() => {
    StatsParticles.canvas = canvasRef.current;
    StatsParticles.numberRef = numberRef.current;
    StatsParticles.number = number;
  }, []);

  useEffect(() => {
    StatsParticles.label = label;
  }, [label]);

  useEffect(() => {
    StatsParticles.onNumberUpdate(number);
  }, [number]);

  return (
    <StatsCounterContainer>
      <StatsCanvas ref={canvasRef} />
      <StatsDisplay>
        <StatsCounterNumber ref={numberRef}>{number}</StatsCounterNumber>
        <StatsCounterLabel>{label}</StatsCounterLabel>
      </StatsDisplay>
    </StatsCounterContainer>
  );
};

export default StatsCounter;

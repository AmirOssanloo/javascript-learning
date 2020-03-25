import React from 'react';
import styled from 'styled-components';

const StatsCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 16rem;
  height: 8.5rem;
  background: rgb(195, 185, 156);
  background: linear-gradient(0deg, rgba(195, 185, 156, 0.2) 0%, rgba(195, 185, 156, 0) 100%);
  text-align: center;

  &:not(last-child) {
    margin-right: 0.4rem;
  }
`;

const StatsCounterNumber = styled.span`
  color: #fff;
  font-size: 3.2rem;
`;

const StatsCounterLabel = styled.span`
  color: #c3b99c;
  font-size: 1.2rem;
`;

const StatsCounter = ({ number, label }) => (
  <StatsCounterContainer>
    <StatsCounterNumber>{number}</StatsCounterNumber>
    <StatsCounterLabel>{label}</StatsCounterLabel>
  </StatsCounterContainer>
);

export default StatsCounter;

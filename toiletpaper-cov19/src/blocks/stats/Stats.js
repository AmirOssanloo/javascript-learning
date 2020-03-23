import React from 'react';
import styled from 'styled-components';
import marbleDarkPatternTexture from '#static/images/marble-dark_pattern.jpg';

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${marbleDarkPatternTexture});
  background-repeat: repeat;
  width: 100%;
  margin-bottom 5rem;
  padding: 1.5rem 2rem 0;
  overflow: hidden;
`;

const StatsTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  max-width: 50rem;
  margin: 0 auto 1rem auto;
  color: #c3b99c;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;

  & span {
    margin: 0 2rem;
  }
`;

const StatsCounters = styled.div`
  display: flex;
  justify-content: center;
`;

const StatsCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 16rem;
  height: 12rem;
  background: rgb(195, 185, 156);
  background: linear-gradient(0deg, rgba(195, 185, 156, 0.2) 0%, rgba(195, 185, 156, 0) 100%);
  text-align: center;

  &:not(last-child) {
    margin-right: 0.4rem;
  }
`;

const StatsCounterNumber = styled.span`
  color: #fff;
  font-size: 4.8rem;
`;

const StatsCounterLabel = styled.span`
  color: #c3b99c;
  font-size: 1.4rem;
`;

const Stats = () => {
  return (
    <StatsContainer>
      <StatsTitle>
        <svg width="148" height="9" viewBox="0 0 148 9">
          <line x1="0" y1="4" x2="140" y2="4" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
          <rect x="142" y="2" width="5" height="5" transform="translate(38 103) rotate(-45)" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
        </svg>
        <span>SHEETS ROLLED</span>
        <svg width="148" height="9" viewBox="0 0 148 9">
          <line x1="7" y1="4" x2="147" y2="4" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
          <rect x="2" y="2" width="5" height="5" transform="translate(-2 4) rotate(-45)" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
        </svg>
      </StatsTitle>
      <StatsCounters>
        <StatsCounter>
          <StatsCounterNumber>4221</StatsCounterNumber>
          <StatsCounterLabel>GLOBALLY</StatsCounterLabel>
        </StatsCounter>
        <StatsCounter>
          <StatsCounterNumber>24</StatsCounterNumber>
          <StatsCounterLabel>BY YOU</StatsCounterLabel>
        </StatsCounter>
      </StatsCounters>
    </StatsContainer>
  );
};

export default Stats;

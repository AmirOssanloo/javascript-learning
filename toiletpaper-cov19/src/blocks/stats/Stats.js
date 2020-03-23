import React, { useContext } from 'react';
import styled from 'styled-components';
import marbleDarkPatternTexture from '#static/images/marble-dark_pattern.jpg';
import appEvents from '#state/reducers/app/events';
import { store } from '#state/store';

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${marbleDarkPatternTexture});
  background-repeat: repeat;
  width: 100%;
  margin-bottom 5rem;
  padding: 1.5rem 0;
`;


const StatsTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto 1rem auto;
  color: #c3b99c;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;

  & span {
    padding: 0 2rem;
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
  const { state, dispatch } = useContext(store);
  const { userSheetsRolled } = state.app;

  return (
    <StatsContainer>
      <StatsTitle>
        <svg width="68" height="9" viewBox="0 0 68 9">
          <line x1="0" y1="4" x2="60" y2="4" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
          <rect x="62" y="2" width="5" height="5" transform="translate(15.42 46.63) rotate(-45)" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
        </svg>
        <span>SHEETS ROLLED</span>
        <svg width="68" height="9" viewBox="0 0 68 9">
          <line x1="7" y1="4" x2="67" y2="4" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
          <rect x="2" y="2" width="5" height="5" transform="translate(-2.16 4.21) rotate(-45)" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
        </svg>
      </StatsTitle>
      <StatsCounters>
        {/* <StatsCounter>
          <StatsCounterNumber>4221</StatsCounterNumber>
          <StatsCounterLabel>GLOBALLY</StatsCounterLabel>
        </StatsCounter> */}
        <StatsCounter>
          <StatsCounterNumber>{userSheetsRolled}</StatsCounterNumber>
          <StatsCounterLabel>BY YOU</StatsCounterLabel>
        </StatsCounter>
      </StatsCounters>
    </StatsContainer>
  );
};

export default Stats;

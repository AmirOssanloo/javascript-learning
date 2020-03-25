import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import StatsTitle from './StatsTitle';
import StatsCounter from './StatsCounter';
import marbleDarkPatternTexture from '#static/images/marble-dark_pattern.jpg';
import { useRootContext } from '#containers/app/AppContext';

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${marbleDarkPatternTexture});
  background-repeat: repeat;
  width: 100%;
  margin-bottom 5rem;
  padding: 1.3rem 0 0;
`;

const StatsCounters = styled.div`
  display: flex;
  justify-content: center;
`;

const Stats = () => {
  const { globalSheetsRolled, userSheetsRolled } = useRootContext();

  return (
    <StatsContainer>
      <StatsTitle title="SHEETS ROLLED" />
      <StatsCounters>
        <StatsCounter label="GLOBALLY" number={globalSheetsRolled} />
        <StatsCounter label="BY YOU" number={userSheetsRolled} />
      </StatsCounters>
    </StatsContainer>
  );
};

export default Stats;

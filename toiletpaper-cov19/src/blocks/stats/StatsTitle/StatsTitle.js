import React from 'react';
import styled from 'styled-components';

const StatsTitleContainer = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto 0.3rem auto;
  color: #c3b99c;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;

  & span {
    padding: 0 2rem;
  }
`;

const StatsTitle = ({ title }) => {
  return (
    <StatsTitleContainer>
      <svg width="68" height="9" viewBox="0 0 68 9">
        <line x1="0" y1="4" x2="60" y2="4" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
        <rect x="62" y="2" width="5" height="5" transform="translate(15.42 46.63) rotate(-45)" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
      </svg>
      <span>{title}</span>
      <svg width="68" height="9" viewBox="0 0 68 9">
        <line x1="7" y1="4" x2="67" y2="4" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
        <rect x="2" y="2" width="5" height="5" transform="translate(-2.16 4.21) rotate(-45)" fill="none" stroke="#ae914b" strokeMiterlimit="10" />
      </svg>
    </StatsTitleContainer>
  );
};

export default StatsTitle;

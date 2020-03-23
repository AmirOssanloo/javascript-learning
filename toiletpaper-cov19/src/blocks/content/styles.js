import styled from 'styled-components';
import marblePatternTexture from '#static/images/marble_pattern.jpg';

export const StyledContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${marblePatternTexture});
  background-repeat: repeat;
`;

export const StyledContent = styled.div`
  width: 78rem;
  max-width: 90vw;
  background-color: #fff;
  padding: 6rem 5rem 8rem 5rem;
`;

export const StyledTitle = styled.h1`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto 5rem auto;
  padding-bottom: 3rem;
  border-bottom: 4px solid #ae914b;
`;

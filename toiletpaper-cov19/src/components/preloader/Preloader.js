import React from 'react';
import styled from 'styled-components';
import marbleDarkPatternTexture from '#static/images/marble-dark_pattern.jpg';

const PreloaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${marbleDarkPatternTexture});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <h1>Loading...</h1>
    </PreloaderContainer>
  );
};

export default Preloader;

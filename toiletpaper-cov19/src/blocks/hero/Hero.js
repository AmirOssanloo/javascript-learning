import React, { createRef, useEffect } from 'react';
import Roll from './roll/Roll';
import rollHolderTexture from '#static/images/roll_holder.png';

import {
  StyledHero,
  StyledWallContainer,
  StyledWallVignette,
  StyledRollCanvas,
  StyledRollContainer,
  StyledRollHolder,
  StyledHeroBorder
} from './styles';

const Hero = () => {
  const canvasRef = createRef();

  useEffect(() => {
    const roll = new Roll(canvasRef.current);
  }, []);

  return (
    <StyledHero>
      <StyledWallContainer>
        <StyledWallVignette />
      </StyledWallContainer>
      <StyledRollContainer>
        <StyledRollHolder>
          <img src={rollHolderTexture} />
        </StyledRollHolder>
        <StyledRollCanvas ref={canvasRef}></StyledRollCanvas>
      </StyledRollContainer>
      <StyledHeroBorder />
    </StyledHero>
  );
};

export default Hero;

import React, { createRef, useEffect } from 'react';
import { StyledHero } from './styles';
import Roll from './roll/Roll';

const Hero = () => {
  const canvasRef = createRef();

  useEffect(() => {
    const roll = new Roll(canvasRef.current);
  }, []);

  return (
    <StyledHero id="hero">
      <div id="wall-container">
        <div id="wall-vignette"></div>
      </div>
      <div id="roll-container">
        <div id="roll-holder">
          {/* <img src="./static/roll_holder.png" class="noselect" /> */}
        </div>
      </div>
      <canvas ref={canvasRef}></canvas>
    </StyledHero>
  );
};

export default Hero;

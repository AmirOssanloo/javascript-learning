import React, { useEffect } from 'react';
import { StyledHero } from './styles';
import Sheet from './roll/sheet/Sheet';

const Hero = () => {

  useEffect(() => {
    const sheet = new Sheet();

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
    </StyledHero>
  );
};

export default Hero;

import React from 'react';
import { StyledContentContainer, StyledContent, StyledTitle } from './styles';

const Content = () => {
  return (
    <StyledContentContainer>
      <StyledContent>
        <StyledTitle>WHY ARE PEOPLE<br />BUYING TOILET PAPER?</StyledTitle>
        <p>While sales of hand soaps and sanitizers have soared in markets around the world since the outbreak began, consumers have also been stocking up on a somewhat surprising item, toilet paper.</p>
        <p>Why are people stockpiling toilet paper during an epidemic that affects respiratory systems? You can’t eat toilet paper, you can’t drink toilet paper, and you can’t even use it to fuel your car or heat your home. It’s a single purpose product useless for this situation, and yet people are fighting each other in supermarket aisles for it.</p>

      </StyledContent>
    </StyledContentContainer>
  );
};

export default Content;

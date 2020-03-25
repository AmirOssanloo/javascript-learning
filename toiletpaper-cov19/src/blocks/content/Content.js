import React from 'react';
import styled from 'styled-components';
import Stats from '#blocks/stats';
import Article from '#components/article';
import theme from '#styles/theme';
import marbleLightPatternTexture from '#static/images/marble-light_pattern.jpg';

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${marbleLightPatternTexture});
  background-repeat: repeat;
  outline: 4px solid ${theme.brand.primary};
  outline-offset: -10px;
`;

export const ContentInner = styled.div`
  width: 68rem;
  background-color: #fff;
  padding-bottom: 7rem;
  z-index: 1;
`;

const Content = () => {
  return (
    <ContentContainer>
      <ContentInner>
        <Stats />
        <Article title="WHY ARE PEOPLE BUYING TOILET PAPER?">
          <p>While sales of hand soaps and sanitizers have soared in markets around the world since the outbreak began, consumers have also been stocking up on a somewhat surprising item, toilet paper.</p>
          <p>Why are people stockpiling toilet paper during an epidemic that affects respiratory systems? You can’t eat toilet paper, you can’t drink toilet paper, and you can’t even use it to fuel your car or heat your home. It’s a single purpose product useless for this situation, and yet people are fighting each other in supermarket aisles for it.</p>
        </Article>
      </ContentInner>
    </ContentContainer>
  );
};

export default Content;

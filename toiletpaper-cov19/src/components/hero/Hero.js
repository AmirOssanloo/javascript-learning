import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
// import Instructions from './instructions';
import Roll from './roll';
import imageCache from '#src/assets';
import { useRootContext } from '#containers/app/AppContext';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 16.5rem);
  min-height: 40rem;
  max-height: 60rem;
  background-image: url(${imageCache.getSrc('tile_pattern')});
  background-repeat: repeat;
  overflow: hidden;
`;

export const WallContainer = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  min-height: inherit;
  max-height: inherit;
  z-index: 0;
`;

export const WallVignette = styled.div`
  position: relative;
  background-image: url(${imageCache.getSrc('hero_vignette')});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: inherit;
  min-width: 168rem;
  height: inherit;
  min-height: inherit;
  max-height: inherit;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const RollContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 46rem;
  height: inherit;
  left: 50%;
  top: 3rem;
  transform: translate(-50%, 0);
`;

export const RollHolder = styled.div`
  margin-top: 2rem;
`;

export const RollCanvas = styled.canvas`
  position: absolute;
  box-shadow: 0 3rem 2rem 1rem rgba(0, 0, 0, 0.2);
`;

const TitleContainer = styled.div`
  position: relative;
  top: 1rem;
  z-index: 1;
`;

const MainTitle = styled.h1`
  color: #fff;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
`;

const GoldStackBehindContainer = styled.div`
  position: absolute;
  width: 46rem;
  height: inherit;
  min-height: inherit;
  max-height: inherit;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
`;

const GoldStackBehindLeft = styled.div`
  position: absolute;
  background: url(${imageCache.getSrc('gold-stack_behind-left')});
  background-repeat: no-repeat;
  width: 29rem;
  height: 13rem;
  left: -6rem;
  bottom: 0;
`;

const GoldStackBehindRight = styled.div`
  position: absolute;
  background: url(${imageCache.getSrc('gold-stack_behind-right')});
  background-repeat: no-repeat;
  width: 29rem;
  height: 13rem;
  left: 22rem;
  bottom: 0;
`;

const GoldStackFrontContainer = styled.div`
  position: absolute;
  width: 46rem;
  height: inherit;
  min-height: inherit;
  max-height: inherit;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  pointer-events: none;
`;

const GoldStackFront = styled.div`
  position: absolute;
  background: url(${imageCache.getSrc('gold-stack_front')});
  background-repeat: no-repeat;
  width: 580rem;
  height: 4rem;
  left: -5.5rem;
  bottom: 0;
`;

const Hero = () => {
  const { hasInteracted, onSetHasInteracted, onIncrementUserSheet } = useRootContext();
  const rollCanvasRef = createRef();

  useEffect(() => {
    const roll = new Roll(rollCanvasRef.current, onIncrementUserSheet, onSetHasInteracted);
  }, []);

  return (
    <Container>
      <WallContainer>
        <WallVignette />
      </WallContainer>
      <TitleContainer>
        <MainTitle>STAY HOME ROLLIN’</MainTitle>
        <SubTitle>The infinite toilet paper roll for worldwide hoarders</SubTitle>
      </TitleContainer>
      <GoldStackBehindContainer>
        <GoldStackBehindLeft />
        <GoldStackBehindRight />
      </GoldStackBehindContainer>
      <RollContainer>
        <RollHolder>
          <img src={imageCache.getSrc('roll_holder')} />
        </RollHolder>
        <RollCanvas ref={rollCanvasRef}></RollCanvas>
        {/* {hasInteracted ? null : <Instructions />} */}
      </RollContainer>
      <GoldStackFrontContainer>
        <GoldStackFront />
      </GoldStackFrontContainer>
    </Container>
  );
};

export default Hero;

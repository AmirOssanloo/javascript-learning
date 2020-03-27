import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
import Instructions from './instructions';
import Roll from './roll';
import { useRootContext } from '#containers/app/AppContext';
import { imageCache } from '#utils/imageCache';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 16.5rem);
  min-height: 40rem;
  max-height: 70rem;
  background-image: url(${imageCache['tile_pattern'].src});
  background-repeat: repeat;
  overflow: hidden;
`;

export const WallContainer = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  min-height: inherit;
  overflow: hidden;
`;

export const WallVignette = styled.div`
  position: relative;
  background-image: url(${imageCache['hero_vignette'].src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: inherit;
  min-width: 168rem;
  height: inherit;
  min-height: inherit;
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
  transform: translate(-50%, 0);
`;

export const RollHolder = styled.div`
  padding-top: 8rem;
`;

export const RollCanvas = styled.canvas`
  position: absolute;
  top: 5rem;
  box-shadow: 0 3rem 2rem 1rem rgba(0, 0, 0, 0.2);
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
      <RollContainer>
        <RollHolder>
          <img src={imageCache['roll_holder'].src} />
        </RollHolder>
        <RollCanvas ref={rollCanvasRef}></RollCanvas>
        {hasInteracted ? null : <Instructions />}
      </RollContainer>
    </Container>
  );
};

export default Hero;

import React, { createRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Roll from './roll/Roll';
import rollHolderTexture from '#static/images/roll_holder.png';
import tilePatternTexture from '#static/images/tile_pattern.jpg';
import heroVignetteTexture from '#static/images/hero_vignette.png';
import appEvents from '#state/reducers/app/events';
import { store } from '#state/store';

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 16.5rem);
  min-height: 40rem;
  background-image: url(${tilePatternTexture});
  background-repeat: repeat;
  overflow: hidden;
`;

export const HeroWallContainer = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  min-height: inherit;
  overflow: hidden;
`;

export const HeroWallVignette = styled.div`
  position: relative;
  background-image: url(${heroVignetteTexture});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: inherit;
  min-width: 168rem;
  height: inherit;
  min-height: inherit;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const HeroRollContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 46rem;
  height: inherit;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const HeroRollHolder = styled.div`
  padding-top: 10rem;
`;

export const HeroRollCanvas = styled.canvas`
  position: absolute;
  top: 5rem;
  box-shadow: 0 3rem 2rem 1rem rgba(0, 0, 0, 0.2);
`;

const Hero = () => {
  const { state, dispatch } = useContext(store);
  const { userSheetsRolled } = state.app;
  const canvasRef = createRef();

  const onIncrementSheet = () => {
    dispatch({ type: appEvents.INCREMENT_SHEETS_ROLLED, payload: 1 });
  };

  useEffect(() => {
    const roll = new Roll(canvasRef.current, onIncrementSheet);
  }, []);

  return (
    <HeroContainer>
      {userSheetsRolled}
      <HeroWallContainer>
        <HeroWallVignette />
      </HeroWallContainer>
      <HeroRollContainer>
        <HeroRollHolder>
          <img src={rollHolderTexture} />
        </HeroRollHolder>
        <HeroRollCanvas ref={canvasRef}></HeroRollCanvas>
      </HeroRollContainer>
    </HeroContainer>
  );
};

export default Hero;

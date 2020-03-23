import styled from 'styled-components';
import tilePatternTexture from '#static/images/tile_pattern.jpg';
import heroVignetteTexture from '#static/images/hero_vignette.png';

export const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 86vh;
  min-height: 50rem;
  background-image: url(${tilePatternTexture});
  background-repeat: repeat;
  overflow: hidden;
`;

export const StyledWallContainer = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  min-height: inherit;
  overflow: hidden;
`;

export const StyledWallVignette = styled.div`
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

export const StyledRollContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 46rem;
  height: inherit;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const StyledRollHolder = styled.div`
  padding-top: 17rem;
`;

export const StyledRollCanvas = styled.canvas`
  position: absolute;
  top: 13rem;
  box-shadow: 0 3rem 2rem 1rem rgba(0, 0, 0, 0.2);
`;

export const StyledHeroBorder = styled.div`
  position: absolute;
  background-color: #ae914b;
  width: inherit;
  height: 4px;
  bottom: 0;
`;

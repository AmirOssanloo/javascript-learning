import styled from 'styled-components';
import wallPatternTexture from '#static/images/wall_pattern.jpg';
import wallVignetteTexture from '#static/images/wall_vignette.png';

export const StyledHero = styled.div`
  width: 100%;
  height: 86vh;
  min-height: 50rem;
  background-image: url(${wallPatternTexture});
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
  background-image: url(${wallVignetteTexture});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 168rem;
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

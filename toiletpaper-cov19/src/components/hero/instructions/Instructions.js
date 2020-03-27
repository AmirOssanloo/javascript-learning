import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import theme from '#styles/theme';
import { imageCache } from '#utils/imageCache';

const Container = styled.div`
  position: absolute;
  width 19rem;
  height: 24rem;
  margin-top: 9rem;
  pointer-events: none;
`;

const InstructionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.main.bg};
  width inherit;
  height: 6rem;
  border: 4px solid ${theme.brand.primary};
  border-radius: 3rem;
  text-align: center;
  font-style: italic;

  & span {
    color: #fff;
    font-size: 3.2rem;
  }
`;

const InstructionHand = styled.div`
  position: absolute;
  width: 5rem;
  height: 7rem;
  // background-color: #000;
  margin: 2rem auto 0 auto;
  left: 0;
  right: 0;

  background-image: url(${props => getHandGestureImg(props.gesture)});
  background-repeat: no-repeat;
`;

const getHandGestureImg = (gesture) => {
  if (gesture === 'grab-closed') return imageCache['instruction-icon_grab-closed'].src;
  if (gesture === 'grab-open') return imageCache['instruction-icon_grab-open'].src;
}

const Instructions = () => {
  const [handGesture, setHandGesture] = useState('grab-closed');
  const instructionHandRef = createRef();

  useEffect(() => {
    var instructionHandRefTl = new gsap.timeline({
      repeat: -1, repeatDelay: 0.2, onRepeat: () => {
        setHandGesture('grab-closed')
      }
    })
      .to(instructionHandRef.current, { duration: 0.5, y: 100, ease: 'power2.easeOut' })
      .add(() => { setHandGesture('grab-open') })
      .to(instructionHandRef.current, { duration: 0.5, y: 0, ease: 'power3.easeInOut' }, '>');
  }, []);

  return (
    <Container>
      <InstructionTitle>
        <span>Let's roll</span>
      </InstructionTitle>
      <InstructionHand gesture={handGesture} ref={instructionHandRef} />
    </Container>
  );
};

export default Instructions;

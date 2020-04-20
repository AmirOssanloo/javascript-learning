import React, { useState } from 'react';
import styled from 'styled-components';
import AnimalDisplay from '#components/AnimalDisplay';
import AnimalQuery from '#components/AnimalQuery';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  height: inherit;
`;

const Root = () => {
  const [showResult, setShowResult] = useState(false);

  return (
    <Wrapper>
      {showResult
        ? <AnimalDisplay onChangeToAnimalQuery={() => setShowResult(false)} />
        : <AnimalQuery onChangeToAnimalDisplay={() => setShowResult(true)} />}
    </Wrapper>
  );
};

export default Root;

import React, { useState } from 'react';
import styled from 'styled-components';
import AnimalDisplay from '#components/AnimalDisplay';
import AnimalQuery from '#components/AnimalQuery';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;
  height: inherit;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 40rem;
  padding-bottom: 10rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 4.8rem;
`;

const Root = () => {
  const [showResult, setShowResult] = useState(false);

  return (
    <Wrapper>
      <Content>
        <Title>Animal Query</Title>
        {showResult
          ? <AnimalDisplay onChangeToAnimalQuery={() => setShowResult(false)} />
          : <AnimalQuery onChangeToAnimalDisplay={() => setShowResult(true)} />}
      </Content>
    </Wrapper>
  );
};

export default Root;



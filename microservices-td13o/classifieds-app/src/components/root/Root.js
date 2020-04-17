import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 80rem;
  margin: 0 auto;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`;

const Root = () => {
  return (
    <Wrapper>
      <Container>
        <Content>Working</Content>
        <Sidebar>Sidebar</Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Root;

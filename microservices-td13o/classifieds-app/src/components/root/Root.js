import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import AccountDetails from '#root/components/Root/AccountDetails';
import Listings from '#root/components/Root/Listings';
import graphqlClient from '#root/api/graphqlClient';
import { setSession } from '#root/store/ducks/session';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 40rem;
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

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        id
        email
      }
    }
  }
`;

const Root = () => {
  const dispatch = useDispatch();
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }

      setInitialised(true);
    })
  }, []);

  if (!initialised) {
    return <h1>Loading...</h1>
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <Listings />
        </Content>
        <Sidebar>
          <AccountDetails />
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Root;

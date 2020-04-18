import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { clearSession } from '#root/store/ducks/session';

const Wrapper = styled.div`
  color: ${props => props.theme.mortar};
  font-size: 0.9rem;
`;

const Email = styled.div`
  color: ${props => props.theme.nero};
`;

const LogoutLink = styled.a.attrs({ href: '#'})`
  display: block;
  margin-top: 0.25rem;
  color: blue;
`;

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

const Account = () => {
  const dispatch = useDispatch();
  const [deleteUserSession] = useMutation(mutation);
  const session = useSelector(state => state.session);

  return (
    <Wrapper>
      <div>Logged in as <Email>{session.user.email}</Email></div>
        <LogoutLink
          onClick={evt => {
            evt.preventDefault();
            dispatch(clearSession());
            deleteUserSession({ variables: { sessionId: session.id }});
          }}>
          Logout
        </LogoutLink>
    </Wrapper>
  );
};

export default Account;

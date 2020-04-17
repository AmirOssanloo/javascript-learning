import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import TextInput from "#root/components/shared/TextInput";

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`;

const LoginButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUserSession(email: $email, password: $password) {
      id
      user {
        id
        email
      }
    }
  }
`;

const Login = () => {
  const [createUserSession] = useMutation(mutation);
  const { formState: { isSubmitting }, handleSubmit, register } = useForm();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const result = await createUserSession({ variables: {
      email, password
    }});

    console.log(result);
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>Email:</LabelText>
        <TextInput name="email" type="email" disabled={isSubmitting} ref={register} />
      </Label>
      <Label>
        <LabelText>Password:</LabelText>
        <TextInput name="password" type="password" disabled={isSubmitting} ref={register} />
      </Label>
      <LoginButton type="submit" disabled={isSubmitting}>Login</LoginButton>
    </form>
  );
};

export default Login;

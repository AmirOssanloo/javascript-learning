import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import TextArea from '#root/components/shared/TextArea';
import TextInput from '#root/components/shared/TextInput';

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

const Button = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const Form = styled.form`
  background-color: ${props => props.theme.whiteSmoke};
  margin-top: 1rem;
  padding: 1rem;
`;

const mutation = gql`
  mutation($title: String!, $description: String!) {
    createListing(title: $title, description: $description) {
      id
    }
  }
`;

const AddListing = ({ onAddListing: pushAddListing }) => {
  const [createListing] = useMutation(mutation);
  const session = useSelector(state => state.session);
  const { formState: { isSubmitting }, handleSubmit, register, reset } = useForm();

  const onSubmit = handleSubmit(async ({ title, description }) => {
    await createListing({ variables: { title, description }});
    pushAddListing();
    reset();
  });

  if (!session) {
    return <h3>Login to add a listing.</h3>
  }

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <LabelText>Title</LabelText>
        <TextInput name="title" type="text" disabled={isSubmitting} ref={register} />
      </Label>
      <Label>
        <LabelText>Description</LabelText>
        <TextArea name="description" type="text" disabled={isSubmitting} ref={register} />
      </Label>
      <Button type="submit" disabled={isSubmitting}>
        Add Listing
      </Button>
    </Form>
  );
};

export default AddListing;

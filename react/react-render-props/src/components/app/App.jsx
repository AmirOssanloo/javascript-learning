import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './App.css';

const loginInitialValues = {
  email: "",
  password: ""
};

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: Yup.string()
    .max(40, 'Please enter no more than 40 characters')
    .required('Please enter a password')
});

const loginSubmit = (values, setSubmitting) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          loginSubmit(values, setSubmitting);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" component="input" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submitting
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
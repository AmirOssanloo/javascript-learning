import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as actions from '../../store/actions';

const SurveyForm = ({ form, submitForm }) => {
  return (
    <div>
      {JSON.stringify(form, null, 2)}
      <Formik
        initialValues={{ title: '', subject: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            submitForm(values);
          }, 500);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
          </button>
            </form>
          )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, actions)(SurveyForm);
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import styles from "./App.css";

const App = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  isSubmitting
}) => (
  <Form>
    <Field
      name="email"
      type="email"
      value={values.email}
      touched={touched.email}
      onChange={handleChange}
      onBlur={handleBlur}
      component={Input}
    />
    <p>{errors.email}</p>
    <button type="submit" disabled={isSubmitting}>
      Submitting
    </button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues: ({ name }) => ({
    name: ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .min(6, "Please enter at least 6 characters")
      .max(40, "Please enter no more than 40 characters")
      .email("Please enter a valid email")
      .required("This field is required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
})(App);

export default FormikApp;

// const loginInitialValues = {
//   email: ""
//   // password: ""
// };

// const loginValidationSchema = Yup.object().shape({
//   email: Yup.string()
//     .min(6, "Please enter at least 6 characters")
//     .max(40, "Please enter no more than 40 characters")
//     .email("Please enter a valid email")
//     .required("This field is required")
//   // password: Yup.string()
//   //   .min(6, "Please enter at least 6 characters")
//   //   .max(40, "Please enter no more than 40 characters")
//   //   .required("Please enter a password")
// });

// const loginSubmit = (values, setSubmitting) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 400);
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Formik
//         initialValues={loginInitialValues}
//         validationSchema={loginValidationSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           loginSubmit(values, setSubmitting);
//         }}
//       >
//         {props => {
//           const {
//             values,
//             touched,
//             errors,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting
//           } = props;
//           return (
//             <Form onSubmit={handleSubmit}>
//               <Field
//                 name="email"
//                 type="email"
//                 value={values.email}
//                 touched={touched.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 component={Input}
//               />
//               <p>{errors.email}</p>
//               <pre>{JSON.stringify(errors, null, 2)}</pre>
//               <ErrorMessage
//                 name="email"
//                 errors={errors.email}
//                 component={ErrorList}
//               />
//               <button type="submit" disabled={isSubmitting}>
//                 Submitting
//               </button>
//               <pre>{JSON.stringify(props, null, 2)}</pre>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// };

// export default App;

// {
//   /* <Field
// name="password"
// type="password"
// touched={touched}
// onChange={handleChange}
// onBlur={handleBlur}
// component={Input}
// />
// <ErrorMessage
// name="password"
// errors={errors.password}
// onChange={handleChange}
// onBlur={handleBlur}
// component={ErrorList}
// /> */
// }

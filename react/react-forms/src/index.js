import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/ui/form/Form";

const App = () => {
  const handleSubmit = data => {
    console.log("Submitting form", data);
  };

  const registerForm = [
    {
      element: "input",
      type: "text",
      name: "email",
      label: "Email",
      touched: "false",
      valid: "false",
      disabled: false,
      validation: {
        required: true,
        format: "email"
      }
    },
    {
      element: "input",
      name: "password",
      label: "Password"
    },
    {
      element: "input",
      name: "confirm",
      label: "Confirm password"
    },
    {
      element: "button",
      label: "Register",
      action: "submit"
    }
  ];

  return (
    <div>
      <Form fields={registerForm} submitForm={handleSubmit} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

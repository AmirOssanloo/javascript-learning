import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/ui/form/Form';
import Input from './components/ui/input/Input';

const App = () => {

  const handleSubmit = (data) => {
    console.log('Submitting form', data);
  };

  const registerForm = [
    {
      element: 'input',
      type: 'text',
      name: 'email',
      label: 'Email',
      // touched: false,
      // valid: false,
      disabled: false,
      validation: {
        required: true,
        format: 'email'
      }
    },
    {
      element: 'input',
      name: 'password',
      label: 'Password'
    },
    {
      element: 'input',
      name: 'confirm',
      label: 'Confirm password'
    },
    {
      element: 'button',
      label: 'Register',
      action: 'submit'
    },
  ];
  
  return (
    <div>
      <Form
        fields={registerForm}
        submitForm={handleSubmit} />
    </div>
  );
};

/*

const registerForm = {
  input: {
    type: 'text',
    name: 'email',
    label: 'Email',
    touched: false,
    valid: false,
    disabled: false,
    validation: {
      required: true,
      format: 'email'
    }
  },

  input: {
    type: 'password',
    name: 'password',
    label: 'Password',
    touched: false,
    valid: false,
    disabled: false,
    validation: {
      required: true,
      minLength: 6,
      maxLength: 40,
      format: 'password'
    }
  },

  input: {
    type: 'password',
    name: 'confirm',
    label: 'Confirm password',
    touched: false,
    valid: false,
    disabled: false,
    validation: {
      required: true,
      match: 'password'
    }
  }

  button: {
    label: 'Register',
    disabled: false,
    onClick={handleSubmit}
  }
}

<Form
  structure={registerForm}
  onSubmit={handleSubmit} />

<Form onSubmit>
  <Input {...props} />
  <Input {...props} />
  <Input {...props} />
</Form>
*/

ReactDOM.render(<App />, document.getElementById('root'));
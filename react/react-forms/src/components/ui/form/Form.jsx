import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';

const Form = ({
  fields,
  submitForm
}) => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    // setInput({
    //   ...input,
    //   [name]: {
    //     value: value,
    //   }
    // });
  };

  const handleSubmit = () => {
    submitForm(input);
  }

  useEffect(createInput, [input]);

  // const createInput = (field) => {
  //   const name = field.name;

  //   setInput({
  //     [name]: {
  //       ...field
  //     }
  //   });

  //   // field.valid = String(field.valid);
  //   // field.touched = String(field.touched);

  //   return (
  //     <Input
  //       onChange={handleInputChange}
  //       {...field}
  //       key={field.label} />
  //   );
  // };

  console.log(input)

  const createButton = (field) => {
    return (
      <Button
        key={field.label}
        onClick={handleSubmit}
        {...field} />
    );
  };

  const something = fields.map(field => {
    switch (field.element) {
      case 'input':
        return createInput(field);
      case 'button':
        return createButton(field);
    }
  });

  return (
    <div>
      {something}
    </div>
  );
};

export default Form;
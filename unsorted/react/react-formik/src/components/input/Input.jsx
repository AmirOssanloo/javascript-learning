import React from "react";
import styles from "./Input.scss";

const Input = ({
  id,
  type,
  label,
  placeholder,
  value,
  errors,
  touched,
  onChange,
  onBlur,
  ...props
}) => {
  // console.log(props);
  // console.log(errors);
  // console.log(touched);

  return (
    <div>
      <input name={props.field.name} onChange={onChange} />
    </div>
  );
};

export default Input;

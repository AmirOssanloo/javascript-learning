import React from "react";
import styles from "./ErrorList.scss";

const ErrorList = props => {
  console.log(props);

  return <div>{props.children}</div>;
};

export default ErrorList;

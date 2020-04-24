import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children
}) => {
  return (
    <div>{children}</div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Button.defaultProps = {};

export default Button;

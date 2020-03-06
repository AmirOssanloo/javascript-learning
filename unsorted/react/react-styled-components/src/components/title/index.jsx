import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './style';

const Title = ({ primary, children }) => {
  return <StyledTitle primary={primary}>{children}</StyledTitle>;
};

Title.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
  width: 100%;
  padding: 3rem 2rem;
  border-radius: ${props => props.rounded ? 0.5 : 0}rem;
`;

const Surface = ({
  rounded,
  children
}) => {
  return (
    <Wrapper rounded={rounded}>
      {children}
    </Wrapper>
  );
};

Surface.propTypes = {
  rounded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Surface.defaultProps = {
  rounded: false
};

export default Surface;

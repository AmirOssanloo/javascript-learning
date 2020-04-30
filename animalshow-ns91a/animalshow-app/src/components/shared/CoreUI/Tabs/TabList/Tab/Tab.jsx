import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  background-color: ${props => props.selected ? props.theme.primary : props.theme.background};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  color: ${props => props.selected ? props.theme.background : props.theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const Tab = () => {
  return (
    <React.Fragment>
      <Button type="button" role="tab" aria-selected="true" selected />
    </React.Fragment>
  );
};

Tab.propTypes = {};

Tab.defaultProps = {};

export default Tab;

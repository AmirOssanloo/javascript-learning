import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TabList = ({
  children
}) => {
  return (
    <Wrapper role="tablist">
      {children}
    </Wrapper>
  );
};

TabList.propTypes = {};

TabList.defaultProps = {};

export default TabList;

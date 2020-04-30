import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TabList from './TabList'

const Wrapper = styled.div`
  width: 100%;
`;

const Tabs = ({ children }) => {
  return (
    <Wrapper>
      <TabList>
        {children}
      </TabList>
    </Wrapper>
  );
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;

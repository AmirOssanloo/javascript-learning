import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Root from '#root/components/root/';

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

render((
  <React.Fragment>
    <GlobalStyle />
    <Root />
  </React.Fragment>
), document.querySelector('#app'));

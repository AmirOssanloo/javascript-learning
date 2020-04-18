import '@babel/polyfill';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import graphqlClient from '#root/api/graphqlClient';
import Root from '#root/components/root/';
import * as theme from './theme';

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
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </ApolloProvider>
), document.querySelector('#app'));

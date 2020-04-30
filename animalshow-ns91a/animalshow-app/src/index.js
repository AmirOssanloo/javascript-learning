import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Root from '#containers/Root/Root';
import GlobalStyle from './styles/global';
import ResetStyle from './styles/reset';
import * as theme from './styles/theme';

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <GlobalStyle />
    <Root />
  </ThemeProvider>
), document.querySelector('#app'));

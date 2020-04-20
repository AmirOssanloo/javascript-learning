import React from 'react';
import ReactDOM from 'react-dom';
import Root from '#containers/Root/Root';
import GlobalStyle from './styles/global';
import ResetStyle from './styles/reset';

ReactDOM.render((
  <React.Fragment>
    <ResetStyle />
    <GlobalStyle />
    <Root />
  </React.Fragment>
), document.querySelector('#app'));

import React from 'react';
import { render } from 'react-dom';
import App from './containers/app/App'
import { ContextProvider } from './containers/app/AppContext'

const app = (
  <ContextProvider>
    <App />
  </ContextProvider>
);

render(app, document.querySelector('#app-root'));

import React from 'react';
import { render } from 'react-dom';
import App from '#containers/app';
import { ContextProvider } from '#state/store'

const app = (
  <ContextProvider>
    <App />
  </ContextProvider>
);

render(app, document.querySelector('#app-root'));

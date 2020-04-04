import React from 'react';
import { render } from 'react-dom';
import Preloader from '#components/preloader';
import ResetStyle from '#styles/reset';
import GlobalStyle from '#styles/global';
import { ContextProvider } from '#containers/app/AppContext'

const App = React.lazy(() => (
  import(/* webpackChunkName: "app" */ './containers/app')
    .then(component => new Promise((resolve, reject) => {
      setTimeout(() => resolve(component), 1000);
    }))
));

const app = (
  <React.Suspense fallback={<Preloader />}>
    <ResetStyle />
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.Suspense>
);

render(app, document.querySelector('#app-root'));

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { ContextProvider } from '#state/store'

const Preloader = () => {
  return (
    <div>
      <h1>PRELOADING</h1>
    </div>
  );
}

const App = React.lazy(() => (
  import(/* webpackChunkName: "app" */ './containers/app')
));


const app = (
  <div>
    <h1>HELLO</h1>
    <Suspense fallback={<Preloader />}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Suspense>
  </div>
);

render(app, document.querySelector('#app-root'));

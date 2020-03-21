import React, { Suspense } from 'react';
import { render } from 'react-dom';
import Preloader from '#blocks/preloader';
import ResetStyle from '#styles/reset';
import GlobalStyle from '#styles/global';
import { ContextProvider } from '#state/store'
import { preloadImages } from '#utils/imageCache';

const App = React.lazy(() => (
  import(/* webpackChunkName: "app" */ './containers/app')
    .then(some => {
      let loading = true;

      const images = [
        { id: 'sheet_texture', src: sheetTexture }
      ];

      preloadImages(images, () => {
        loading = false;
      });

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve(some);
        }, 2000);
      })
    })
    .catch(err => console.log(err))
));

const app = (
  <Suspense fallback={<Preloader />}>
    <ResetStyle />
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </Suspense>
);

render(app, document.querySelector('#app-root'));

import React, { Suspense } from 'react';
import ReactGA from 'react-ga';
import { render } from 'react-dom';
import Preloader from '#blocks/preloader';
import ResetStyle from '#styles/reset';
import GlobalStyle from '#styles/global';
import { ContextProvider } from '#state/store'
import { preloadImages } from '#utils/imageCache';
import sheetTexture from '#static/images/sheet_texture.jpg';
import rollGradientTexture from '#static/images/roll_gradient.png';

const images = [
  { id: 'sheet_texture', src: sheetTexture },
  { id: 'roll_gradient', src: rollGradientTexture }
];

preloadImages(images, () => {
  const App = React.lazy(() => (
    import(/* webpackChunkName: "app" */ './containers/app')
      .then(component => new Promise((resolve, reject) => {
          setTimeout(() => resolve(component), 1000);
        })
      )
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
});

ReactGA.initialize('UA-1721500-14');
ReactGA.pageview(window.location.pathname);

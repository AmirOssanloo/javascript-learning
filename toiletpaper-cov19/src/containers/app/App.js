import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Hero from '#components/hero';
// import Content from '#components/content';
import { ContextProvider } from '#containers/app/AppContext'

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-1721500-14');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <ContextProvider>
      <Hero />
      {/* <Content /> */}
    </ContextProvider>
  );
};

export default App;

import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';
import Hero from '#components/hero';
import Content from '#components/content';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-1721500-14');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Fragment>
      <Hero />
      <Content />
    </Fragment>
  );
};

export default App;

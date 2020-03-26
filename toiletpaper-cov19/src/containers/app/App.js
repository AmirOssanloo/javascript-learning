import React, { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';
import Hero from '#components/hero';
import Content from '#components/content';
import DB from '#database/db';
// import useFirebaseSnapshot from '#hooks/useFirebaseSnapshot';
import { useRootContext } from './AppContext';

const App = () => {
  // const { setGlobalSheetsRolled } = useRootContext();
  // const { snapshot } = useFirebaseSnapshot(DB, '/');
  // const { globalSheetsRolled } = snapshot;

  // useEffect(() => {
  // setGlobalSheetsRolled(globalSheetsRolled);
  // }, [snapshot]);

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

import React, { Fragment, useContext, useEffect } from 'react';
import Hero from '#blocks/hero';
import Content from '#blocks/content';
import appEvents from '#state/reducers/app/events';
import useFirebaseSnapshot from '#hooks/useFirebaseSnapshot';
import { store } from '#state/store';

const App = () => {
  const { snapshot, isLoading, hasError } = useFirebaseSnapshot(db, '/');
  const { globalSheetsRolled } = snapshot;
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    console.log(globalSheetsRolled);
  }, []);

  if (isLoading) {
    return 'Still loading';
  }

  if (hasError) {
    return 'An error occurred';
  }

  return (
    <Fragment>
      <Hero />
      <Content />
    </Fragment>
  );
};

export default App;

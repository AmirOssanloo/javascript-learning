import React, { Component, Fragment, useContext } from 'react';
import Hero from '#blocks/hero';
import Content from '#blocks/content';
// import { store } from '#state/store';

class App extends Component {
  // const { state, dispatch } = useContext(store);
  // const { title } = state.app;
  // const { counter, numbers } = state.counter;

  render() {
    return (
      <Fragment>
        <Hero />
        <Content />
      </Fragment>
    );
  }
};

export default App;

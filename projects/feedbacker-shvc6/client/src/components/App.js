import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import * as actions from '../store/actions';

const SurveyNew = () => <h2>SurveyNew</h2>;

const App = ({ fetchUser }) => {

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default connect(null, actions)(App);
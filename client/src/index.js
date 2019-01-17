import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Calendar from './calendar/Calendar'

ReactDOM.render((
  <Provider store={store}>
    <Calendar />
  </Provider>), document.getElementById('root')
);
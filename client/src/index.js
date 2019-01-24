import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import socket from './socket/socket';
import App from './containers/app/App';
import './index.css';

ReactDOM.render((
  <Provider store={store}>
    <App socket={socket} />
  </Provider>), document.getElementById('root')
);
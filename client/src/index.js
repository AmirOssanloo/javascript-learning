import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './containers/app/App';
import io from 'socket.io-client';

const socket = io();

ReactDOM.render((
  <Provider store={store}>
    <App socket={socket} />
  </Provider>), document.getElementById('root')
);
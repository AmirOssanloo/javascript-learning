import io from 'socket.io-client';
import store from '../store/store';

const socket = io();

socket.on('connect', () => {
  store.dispatch({type: 'SET_SOCKET', value: socket});
});

socket.on('disconnect', () => {
  store.dispatch({type: 'SET_SOCKET', value: null});
});

export default socket;
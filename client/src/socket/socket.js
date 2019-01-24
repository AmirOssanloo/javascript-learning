import io from 'socket.io-client';
import store from '../store/store';

const socket = io();

socket.on('connect', () => {
  store.dispatch({type: 'SET_SOCKET', value: socket});

  document.addEventListener('mousemove', (e) => {
    socket.emit('updateCursor', {
      x: e.clientX,
      y: e.clientY
    })
  });
});

socket.on('disconnect', () => {
  store.dispatch({type: 'SET_SOCKET', value: null});
});

export default {socket};
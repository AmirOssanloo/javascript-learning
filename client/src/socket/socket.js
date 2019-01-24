import io from 'socket.io-client';
import store from '../store/store';

const setupSocket = () => {
  const socket = io();
  
  socket.on('connect', () => {
    store.dispatch({type: 'SET_SOCKET', value: socket});

    socket.on('updateUserList', users => {
      store.dispatch({type: 'UPDATE_USERLIST', value: users})
    });
  });
  
  socket.on('disconnect', () => {
    store.dispatch({type: 'SET_SOCKET', value: null});
  });

  return socket;
}

export default {setupSocket};
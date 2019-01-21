let socket = io();
    
socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', (msg) => {
  console.log(msg);
});

socket.on('newUserJoined', (msg) => {
  console.log(msg);
});
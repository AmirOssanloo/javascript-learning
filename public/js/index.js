let socket = io();
    
socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'Mr. Server',
    text: 'You are doing great dear Mr. Server!'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', (msg) => {
  console.log('On [newMessage]', msg);
});
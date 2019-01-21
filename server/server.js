const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(PUBLIC_PATH));

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.emit('newMessage', {
    from: 'Mr. Server',
    text: 'I am emitting a new message...',
    createdAt: Date.now()
  });

  socket.on('createMessage', (msg) => {
    console.log('On [createMessage]', {...msg, createdAt: Date.now()});
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(PUBLIC_PATH));

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      callback('Name and room are required.');
    }

    socket.join(params.room);
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', 'New user joined'));

    callback();
  });

  socket.on('createMessage', (msg, callback) => {
    io.emit('newMessage', generateMessage(msg.from, msg.text));
    callback('This is from the server');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
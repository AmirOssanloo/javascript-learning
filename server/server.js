const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(PUBLIC_PATH));

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
  socket.broadcast.emit('newUserJoined', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (msg, callback) => {
    console.log('On [createMessage]', msg);
    io.emit('newMessage', generateMessage(msg.from, msg.text));
    callback('This is from the server');
    // socket.broadcast.emit('newMessage', {
    //   from: msg.from,
    //   text: msg.text,
    //   createdAt: Date.now()
    // });
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
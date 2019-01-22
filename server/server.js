const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let users = new Users();

app.use(express.static(PUBLIC_PATH));

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and room are required.');
    }

    socket.join(params.room);
    users.removeUser(socket.id);
    users.addUser(socket.id, params.name, params.room);

    io.to(params.room).emit('updateUserList', users.getUserList(params.room));
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', 'New user joined'));

    callback();
  });

  socket.on('createMessage', (msg, callback) => {
    let user = users.getUser(socket.id);

    if (user && isRealString(msg.text)) {
      io.to(user.room).emit('newMessage', generateMessage(user.name, msg.text));
    }

    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    let user = users.getUser(socket.id);

    if (user)
      io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    let user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left`));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
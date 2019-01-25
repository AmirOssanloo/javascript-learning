const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const {createMessage} = require('./server/message/Message');
const Users = require('./server/users/Users');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const users = new Users();

app.use(express.static(publicPath));

io.on('connection', socket => {
  socket.on('join', (username, room) => {
    users.removeById(socket.id);
    users.create(socket.id, username, room);

    socket.join(room);
    socket.emit('addMessage', createMessage('Admin', 'Welcome to the chat room'));
    socket.broadcast.to(room).emit('addMessage', createMessage('Admin', `${username} has joined the room`));
  });

  socket.on('createMessage', (message, callback) => {
    let user = users.findById(socket.id);
    io.to(user.room).emit('addMessage', createMessage(user.name, message.text));
    
    callback();
  });

  socket.on('disconnect', () => {
    let user = users.removeById(socket.id);

    if (user) {
      io.to(user.room).emit('addMessage', createMessage('Admin', `${user.name} has left the room`));
    }
  });
});

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
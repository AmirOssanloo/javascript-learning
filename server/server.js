const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');
const {Users} = require('./utils/users');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let users = new Users();

app.use(express.static(PUBLIC_PATH));

io.on('connection', (socket) => {
  socket.on('join', params => {
    let {username, room} = params;
    
    socket.join(room);
    users.removeUser(socket.id);
    users.addUser(socket.id, username, room);
    
    console.log(users);
    io.to(room).emit('updateUserList', users.getUserList(room));
    socket.emit('newMessage', generateMessage('Admin', `Welcome to the chat room`));
    socket.broadcast.to(room).emit('newMessage', generateMessage('Admin', `${username} has joined the room`));
  });

  socket.on('createMessage', (obj, callback) => {
    let user = users.getUser(socket.id);
    io.to(user.room).emit('newMessage', generateMessage(user.username, obj.text));

    callback();
  });

  socket.on('updateCursor', obj => {
    let user = users.getUser(socket.id);
    users.updateUserCursor(user, obj);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    let user = users.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room));
      io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.username} has left the room`));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'larry@terry.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'secret-salt').toString()
  }]
}, {
  _id: userTwoId,
  email: 'berry@terry.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, 'secret-salt').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'Second test todo',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'First test todo',
  completed: true,
  completedAt: 1543292521553,
  _creator: userTwoId
}];

const populateTodos = done => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
}

const populateUsers = done => {
  User.deleteMany({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
}

module.exports = { todos, populateTodos, users, populateUsers };
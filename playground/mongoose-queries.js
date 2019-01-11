// Queries docs at:
// https://mongoosejs.com/docs/queries.html

const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');
// const id = '5c387574abf85517a8665dc71';

const id = '5c367c147bf7620e396244eb';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

User.findById(id).then(user => {
  if (!user) return console.log('User not found');

  console.log(JSON.stringify(user, undefined, 2));
}).catch(err => console.log(err));


/*
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
};

// Find all by query (returns array)
Todo.find({
  _id: id
}).then(todos => {
  console.log('Todos:', todos)
});

// Find one by query (returns document)
Todo.findOne({
  _id: id
}).then(todo => {
  console.log('Todo:', todo);
});

// Finds document by id
Todo.findById(id).then(todo => {
  if (!todo) return console.log('ID not found');
  
  console.log('Todo:', todo);
}).catch(err => console.log(err));

*/
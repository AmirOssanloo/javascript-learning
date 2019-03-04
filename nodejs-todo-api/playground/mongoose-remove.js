const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.deleteMany({}).then(result => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5c3898c48b7386ddb9832cf1').then(todo => {
  console.log(todo);
});
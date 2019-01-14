const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const config = require('./config');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');

const port = process.env.PORT
const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then(doc => {
    res.send(doc);
  }, err => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({ todos });
  }, err => {
    res.status(400).send(err);
  })
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id))
    return res.status(404).send('Invalid user ID');

  Todo.findById(id).then(todo => {
    if (!todo)
      return res.status(404).send();

    res.send({ todo });
  }, err => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id))
    return res.status(404).send('Invalid user ID');
  
  Todo.findByIdAndDelete(id).then(todo => {
    if (!todo)
      return res.status(404).send();
    
    res.send({ todo });
  }, err => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id))
    return res.status(404).send('Invalid user ID');
  
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate(id, { $set: body }, { new: true }).then(todo => {
    if (!todo)
      return res.status(404).send();
  
    res.send({ todo });
  }, err => {
    res.status(400).send();
  });
});

app.post('/users', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);
  let user = new User(body);

  user.save().then(user => {
    return user.generateAuthToken();
  }).then(token => {
    res.header('x-auth', token).send(user);
  }).catch(err => {
    res.status(400).send(err);
  });
});

app.get('/users', (req, res) => {
  User.find().then(user => {
    res.send({ user });
  }, err => {
    res.status(400).send(err);
  })
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.post('/users/login', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then(user => {
    return user.generateAuthToken().then(token => {
      res.header('x-auth', token).send(user);
    });
  }).catch(err => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
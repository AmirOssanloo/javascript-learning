const express = require('express');
const Mongoose = require('./db/mongoose');
const User = require('./models/User');
const Task = require('./models/Task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/user/:id', async (req, res) => {
  const _id = req.params.id;
  
  try {
    const users = await User.findById(_id)
    if (!users) return res.status(404).send();
    res.status(201).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err)
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const task = await Task.find();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err)
  }
});

app.get('/task/:id', async (req, res) => {
  const _id = req.params.id;
  
  try {
    const task = await Task.findById(_id);
    if (!task) return res.status(404).send();
    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/task', async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(200).send(task)
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
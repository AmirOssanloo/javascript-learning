const express = require('express');
const router = new express.Router();
const User = require('../models/User');

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const users = await User.findById(req.params.id)

    if (!users)
      return res.status(404).send();

    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();

    res.status(200).send({user, token});
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(200).send({user, token});
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'age', 'password'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation)
    return res.status(404).send({error: 'Invalid updates'});

  try {
    const user = await User.findById(req.params.id);

    updates.forEach(update => user[update] = req.body[update]);
    await user.save();
    
    if (!user)
      return res.status(404).send();

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).send();

    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/user');
const router = new express.Router();

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

router.get('/users/:id', async (req, res) => {
  try {
    const users = await User.findById(req.params.id)

    if (!users)
      return res.status(404).send();

    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();

    res.send({user, token});
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token =>
      token.token !== req.token);

    await req.user.save();

    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({user, token});
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'age', 'password'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation)
    return res.status(400).send({error: 'Invalid updates'});

  try {
    updates.forEach(update =>
      req.user[update] = req.body[update]);
    
    await req.user.save();
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/users/me', auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
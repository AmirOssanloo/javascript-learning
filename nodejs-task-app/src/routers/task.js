const express = require('express');
const auth = require('../middleware/auth');
const Task = require('../models/Task');
const router = new express.Router();

router.get('/tasks', auth, async (req, res) => {
  try {
    await req.user.populate('tasks').execPopulate();
    res.send(req.user.tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOne({_id: req.params.id, owner: req.user._id});
    
    if (!task)
      return res.status(404).send();

    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  });

  try {
    await task.save();

    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation)
    return res.status(404).send({error: 'Invalid updates'});
  
  try {
    const task = await Task.findOne({_id: req.params.id, owner: req.user._id})
    
    if (!task)
      return res.status(404).send();

    updates.forEach(update => task[update] = req.body[update]);
    await task.save();

    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id});

    if (!task)
      return res.status(404).send();

    return res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
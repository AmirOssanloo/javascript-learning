const express = require('express');
const router = new express.Router();
const Task = require('../models/Task');

router.get('/tasks', async (req, res) => {
  try {
    const task = await Task.find();

    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).send();

    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();

    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation)
    return res.status(404).send({error: 'Invalid updates'});
  
  try {
    const task = await Task.findById(req.params.id);
    
    updates.forEach(update => task[update] = req.body[update]);
    await task.save();
    
    if (!task)
      return res.status(404).send();

    res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task)
      return res.status(404).send();

    return res.status(200).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
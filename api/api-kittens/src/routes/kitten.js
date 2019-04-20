const express = require('express');
const Kitten = require('../models/Kitten');
const router = new express.Router();

router.get('/api/kittens', async (req, res) => {
  try {
    const kittens = await Kitten.find();

    res.status(200).send(kittens);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/api/kittens', async (req, res) => {
  try {
    const kitten = new Kitten(req.body);
    await kitten.save()
    
    res.status(201).send(kitten);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
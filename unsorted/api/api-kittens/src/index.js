const mongoose = require('./db/mongoose');
const express = require('express');
const kittenRouter = require('./routes/kitten');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(kittenRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API root');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});
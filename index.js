const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}.`);
});

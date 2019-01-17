const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static( __dirname + '/public'))

app.get('/api/test', (req, res) => {
  res.send({
    message: 'This is a tfasfsafasest',
    timestamp: Date.now()
  });
});

app.get('/api/fest', (req, res) => {
  res.send({
    message: 'This is a fest',
    timestamp: Date.now()
  });
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}...`);
});
const bodyParser = require('body-parser');
const express = require('express');
const uuid = require('uuid/v4');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

let tokens = [];

// Routes
app.get('/clicks/token', (req, res) => {
  let token = {
    id: uuid(),
    timestamp: Date.now()
  }

  tokens.push(token);  
  res.status(200).send({token, tokens});
});

app.post('/clicks/token', (req, res) => {
  let token = tokens.find(token => token.id === req.body.id);
  
  // Reject auth if token was not find
  if (!token) return res.status(401).send();
  
  // Remove selected and expired tokens
  tokens = tokens.filter(token => {
    let expired = (token.timestamp + 60000) > Date.now();
    return token.id !== req.body.id && expired;
  });

  res.status(200).send();
});

app.get('/api/one', (req, res) => {
  res.send({
    message: 'You got one!',
    timestamp: Date.now()
  });
});

app.get('/api/two', (req, res) => {
  res.send({
    message: 'You got two!',
    timestamp: Date.now()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
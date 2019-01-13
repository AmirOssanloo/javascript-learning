const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10
};

let token = jwt.sign(data, 'somesecret');

let decoded = jwt.verify(token, 'somesecret');

console.log(`Token: ${token}`);
console.log(decoded);
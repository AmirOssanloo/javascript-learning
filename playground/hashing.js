const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

let hashedPassword = '$2a$15$wW2V4g.Gv3geey9Vo.JbNeHU.jqjT0jhhy79r9Y/C.vwgzGgCapSK';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// let data = {
//   id: 10
// };

// let token = jwt.sign(data, 'somesecret');

// let decoded = jwt.verify(token, 'somesecret');

// console.log(`Token: ${token}`);
// console.log(decoded);
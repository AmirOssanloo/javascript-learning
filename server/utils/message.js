const moment = require('moment');
const date = moment();

const generateMessage = (from, text) => {
  return {
    from, text,
    createdAt: date.valueOf()
  };
};

module.exports = {
  generateMessage
}
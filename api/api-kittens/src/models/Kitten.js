const mongoose = require('mongoose');

const kittenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Kitten = mongoose.model('Kitten', kittenSchema);

module.exports = Kitten;
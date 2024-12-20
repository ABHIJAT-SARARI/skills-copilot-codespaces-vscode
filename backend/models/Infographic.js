
const mongoose = require('mongoose');

const infographicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  usedBy: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Infographic', infographicSchema);
const mongoose = require('./../db.js');

const cardSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Card', cardSchema);

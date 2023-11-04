const mongoose = require('mongoose');
const validator = require('validator');

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  phoneNumber: {
    type: String,
  },
  message: {
    type: String,
  },
  file: {
    type: String,
  },
});

const Data = mongoose.model('Contact-Request', userDataSchema);

module.exports = Data;

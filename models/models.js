var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('users', userSchema);
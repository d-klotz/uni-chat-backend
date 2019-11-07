const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  lastname: String,
  email: String,
  nickname: String,
  Groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }]
});

module.exports = mongoose.model('User', UserSchema);
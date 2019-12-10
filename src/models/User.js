const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleAuthId: String,
  name: String,
  lastname: String,
  email: String,
  username: String,
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }],
  themeName: String
});

module.exports = mongoose.model('User', UserSchema);
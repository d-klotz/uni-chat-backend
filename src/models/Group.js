const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  name: String,
  creator: String
});

module.exports = mongoose.model('Group', GroupSchema);
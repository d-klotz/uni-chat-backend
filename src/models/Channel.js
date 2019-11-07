const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String
});

module.exports = mongoose.model('Group', GroupSchema);
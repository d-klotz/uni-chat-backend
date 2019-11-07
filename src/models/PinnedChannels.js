const mongoose = require('mongoose');

const PinnedChannelsSchema = new mongoose.Schema({
  id: Number,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('PinnedChannels', PinnedChannelsSchema);
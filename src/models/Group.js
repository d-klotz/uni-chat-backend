const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  id: Number,
  name: String,
  channels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Channel'
  }],
  pinned:
    [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PinnedChannels'
    }]
});

module.exports = mongoose.model('Group', GroupSchema);
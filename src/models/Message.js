const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },
  room: String,
  emitterId: String,
  emitter: String,
  content: { 
    type : { type : String }, 
    value: { type : String }
  },
  timestamp: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
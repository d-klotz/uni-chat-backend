const Message = require('../models/Message');

module.exports = {
  async store(messageData) {

    await Message.create({
      content: messageData.content,
      room: messageData.room,
      emitterId: messageData.emitterId,
      emitter: messageData.emitter,
      group: messageData.group
    });
  },

  async show(req, res) {
    const {groupId} = req.params;

    const messages = await Message
      .find({group: groupId})
      .sort({'timestamp': -1})
      .limit(50);

    return res.json(messages).status(200);
  }
};
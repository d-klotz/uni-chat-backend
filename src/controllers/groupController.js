const Group = require('../models/Group');

module.exports = {
  async index(req, res) {
    const group = {_id: 1, name:'General', description: 'Lets chat!', creator: 'admin'};

    const data = {
      group
    }

    return res.json(data).status(200);

  },

  async show(req, res) {
    const groups = await Group.find().limit(50);

    const data = {
      groups
    }
    return res.json(data).status(200);
  }
};
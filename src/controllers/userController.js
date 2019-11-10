const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
  async update(req, res) {
    const { userId } = req.params;

    let user = await User.findOne({ _id: userId });
        
    if (!user) {
      return res.status(400).json({ error: 'User does not exist'});
    }
    return res.status(200).send({user});
  }
}
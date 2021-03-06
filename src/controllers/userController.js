const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { userId } = req.params;

    let user;
    try {
      user = await User.findOne({ _id: userId });
    } catch (error) {
      if (!user) {
        return res.status(400).json({ error: 'User does not exist'});
      }
    }
        
    return res.status(200).send({user});
  },

  async check(req, res) {
    const { username } = req.params;

    /**
     * Finds a user by username ignoring the case
     */
    const user = await User.findOne({ username: new RegExp('\\b' + username + '\\b', 'i') });
        
    if (!user) {
      return res.status(200).send({ exist: false });
    }

    return res.status(200).send({ exist: true });
  },

  async groups (req, res) {
    const { userId } = req.params;
    
    const user = await User.findOne({ _id: userId });
        
    if (!user) {
      return res.status(400).json({ error: 'User does not exist'});
    }

    await user.populate('groups').execPopulate();

    return res.status(200).send({groups: user.groups});
  },

  async show (req, res) {
    
    const users = await User.find().limit(20);
        
    if (!users) {
      return res.status(400).json({ error: 'No users found'});
    }

    return res.status(200).send({users: users});
  },

  async patch(req, res) {
    const { userId } = req.params;
    const query = req.body;

    await User.findOneAndUpdate({ _id: userId }, query, { upsert: true }, function (error, user) {
      if (error) return res.send({ error }).status(500);
      return res.send({ user }).status(200);
    });
  }
}
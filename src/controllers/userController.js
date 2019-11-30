const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { userId } = req.params;

    const user = await User.findOne({ _id: userId });
        
    if (!user) {
      return res.status(400).json({ error: 'User does not exist'});
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
  }
}
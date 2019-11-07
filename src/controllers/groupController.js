module.exports = {
  async show(req, res) {
    const channels = [
      {id: 1, name:'Random', description: 'A channel to talk about the most random things ever'}, 
      {id: 2, name: 'ReactJs', description: 'Lets talk about React ecosystem'}, 
      {id: 3, name:'Java', description: 'That is heavy to explain' }, 
      {id: 4, name:'General', description: 'Lets chat!'}
    ]
    const data = {
      channels
    }
    return res.json(data).status(200);
  },

  async index(req, res) {
    const channels = [
      {id: 1, name:'Random', description: 'A channel to talk about the most random things ever'},
      {id: 4, name:'General', description: 'Lets chat!'}
    ]
    const data = {
      channels
    }
    return res.json(data).status(200);
  }
};
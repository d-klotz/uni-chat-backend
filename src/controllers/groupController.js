module.exports = {
  async store(req, res) {
    const channels = [
      {id: 1, name:'Random'}, 
      {id: 2, name: 'ReactJs'}, 
      {id: 3, name:'Java'}
    ]
    const data = {
      channels
    }
    return res.json(data).status(200);
  }
};
module.exports = {
  async show(req, res) {
    const group = {_id: 1, name:'General', description: 'Lets chat!', creator: 'admin'};

    const data = {
      group
    }
    return res.json(data).status(200);
  }
};
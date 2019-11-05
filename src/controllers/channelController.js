module.exports = {
  async store(req, res) {
    const channels = ['Random, ReactJs, Java']
    return res.json(channels).status(200);
  }
};
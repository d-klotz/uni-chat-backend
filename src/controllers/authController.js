const axios = require('axios');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email, password, isSignup } = req.body;

    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAd7_0VdTEYk73_auh1cTXKDP83Vr9mnP0';
    
    if (!isSignup) {
        url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAd7_0VdTEYk73_auh1cTXKDP83Vr9mnP0';
    }

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    axios.post(url, authData)
      .then(async response => {
        const data = {
          expirationDate : new Date(new Date().getTime() + response.data.expiresIn * 1000),
          userId : response.data.localId,
          token : response.data.idToken,
          expiresIn : response.data.expiresIn
        }

        let user = await User.findOne({ email });
        
        if (!user) {
          user = await User.create({ id: data.userId, email: email });
        }

        console.log("fez o data", data);
        return res.json(data).status(200);
      })
      .catch(error => {
        console.log(error);
        res.json(error.response.data.error).status(500)
      });
  }
};
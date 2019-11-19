const axios = require('axios');
const User = require('../models/User');
const Group = require('../models/Group');

module.exports = {
  async store(req, res) {
    const { email, password, username, isSignup } = req.body;

    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAd7_0VdTEYk73_auh1cTXKDP83Vr9mnP0';
    
    if (!isSignup) {
        url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAd7_0VdTEYk73_auh1cTXKDP83Vr9mnP0';
    }

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const response = axios.post(url, authData)
      .then(async response => {
        let user = await User.findOne({ googleAuthId: response.data.localId });
        
        if (!user) {
          await Group.findOne({ name: 'Unichat community' })
            .then(async res => {
              user = await User.create({
                googleAuthId: response.data.localId, 
                email: email, 
                username: username,
                groups: [res._id]
              });
            })
        }          
        
        const data = {
          expirationDate : new Date(new Date().getTime() + response.data.expiresIn * 1000),
          googleAuthId : response.data.localId,
          token : response.data.idToken,
          expiresIn : response.data.expiresIn,
          userId: user._id,
          email: user.email,
          username: user.username
        }

        console.log('User logged in', user);
        
        return res.status(200).send(data);
    
      })
      .catch(error => {
        return res.status(404).send({ error: error });
      });
    return response;
  }
};
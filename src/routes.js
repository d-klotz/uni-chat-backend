const express = require('express');

const AuthController = require('./controllers/authController');
const ChannelController = require('./controllers/channelController');
const GroupController = require('./controllers/groupController');
const UserController = require('./controllers/userController');

const routes = express.Router();

routes.post('/auth', AuthController.store);
routes.get('/users/:userId', UserController.update);
routes.post('/channels', ChannelController.store);
routes.get('/groups/:groupId/channels', GroupController.show);
routes.get('/groups/:groupId/channels/pinned', GroupController.index);
module.exports = routes;
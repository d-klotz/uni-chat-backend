const express = require('express');

const AuthController = require('./controllers/authController');
const ChannelController = require('./controllers/channelController');
const GroupController = require('./controllers/groupController');

const routes = express.Router();

routes.post('/auth', AuthController.store);
routes.post('/channels', ChannelController.store);
routes.get('/groups/:groupId/channels', GroupController.show);
routes.get('/groups/:groupId/channels/pinned', GroupController.index);
module.exports = routes;
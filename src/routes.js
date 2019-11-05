const express = require('express');

const SessionController = require('./controllers/SessionController');
const ChannelController = require('./controllers/channelController');
const GroupController = require('./controllers/groupController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/channels', ChannelController.store);
routes.get('/groups/:groupId/channels', GroupController.store);
module.exports = routes;
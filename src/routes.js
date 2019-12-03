const express = require('express');

const AuthController = require('./controllers/authController');
const GroupController = require('./controllers/groupController');
const UserController = require('./controllers/userController');
const MessageController = require('./controllers/messageController');

const routes = express.Router();

routes.post('/auth', AuthController.store);
routes.get('/users/', UserController.show);
routes.get('/users/:userId', UserController.index);
routes.get('/users/checkusername/:username', UserController.check);
routes.get('/users/:userId/groups', UserController.groups);
routes.get('/groups/:groupId/', GroupController.index);
routes.get('/groups', GroupController.show);
routes.get('/messages/:groupId/', MessageController.show);
module.exports = routes;
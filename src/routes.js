const express = require('express');

const AuthController = require('./controllers/authController');
const GroupController = require('./controllers/groupController');
const UserController = require('./controllers/userController');

const routes = express.Router();

routes.post('/auth', AuthController.store);
routes.get('/users/:userId', UserController.update);
routes.get('/users/:userId/groups', UserController.groups);
routes.get('/groups/:groupId/', GroupController.show);
module.exports = routes;
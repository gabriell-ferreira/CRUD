const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express();

routes.post('/user', UserController.create);
routes.get('/user', UserController.index);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

module.exports = routes;
const express = require('express');

const routes = express.Router();

const ongsController = require('./controllers/ongs_controller');

routes.get('/ongs', ongsController.index);

routes.post('/ongs', ongsController.create);

module.exports = routes;
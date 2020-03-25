const express = require('express');

const routes = express.Router();

const ongsController = require('./controllers/ongs_controller');
const incidentsController = require('./controllers/incidents_controller');
const profileController = require('./controllers/profiles_controller');
const sesssionsController = require('./controllers/sessions_controller');

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create);

routes.get('/incidents', incidentsController.index)
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/sessions', sesssionsController.create);

module.exports = routes;
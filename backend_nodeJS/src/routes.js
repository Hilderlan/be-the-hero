const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => response.send('XD'));

module.exports = routes;
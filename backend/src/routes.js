const express = require('express');

const OngController = require('./controllers/OngController');
const IncindentController = require('./controllers/IncindentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncindentController.index);
routes.post('/incidents', IncindentController.create);
routes.delete('/incidents/:id', IncindentController.delete);

module.exports = routes;
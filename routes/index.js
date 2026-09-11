const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.helloRoute);
routes.get('/goodbye', contactsController.goodbyeRoute);

routes.use('/contacts', require('./contacts'));

module.exports = routes;
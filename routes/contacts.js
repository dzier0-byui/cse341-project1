const express = require('express');
const routes = express.Router();
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getAllContacts);
routes.get('/:id', contactsController.getContactById);

module.exports = routes;
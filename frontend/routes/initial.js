const Router = require('express').Router()
const InitialController = require('../controllers/initial')

Router.get('/', InitialController.index);

module.exports = Router
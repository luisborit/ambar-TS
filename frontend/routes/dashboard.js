const Router = require('express').Router()
const DashboardController = require('../controllers/dashboard')

Router.get('/', DashboardController.main);

module.exports = Router
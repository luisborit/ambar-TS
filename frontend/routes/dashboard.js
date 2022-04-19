const Router = require('express').Router()
const DashboardController = require('../controllers/dashboard')

Router.get('/panel', DashboardController.main);

module.exports = Router
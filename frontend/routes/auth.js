const Router = require('express').Router()
const AuthController = require('../controllers/auth')
    
Router.post("/login", AuthController.login)

module.exports = Router
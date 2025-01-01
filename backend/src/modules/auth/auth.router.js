const verifyToken = require('../../middlewares/validateToken.middleware')
const { bodyValidator } = require('../../middlewares/validator.middleware')
const authController = require('./auth.controller')
const { LoginDTO } = require('./auth.request')

const router = require('express').Router()

router.post('/login', bodyValidator(LoginDTO), authController.login) //login
    
router.post('/logout',verifyToken, authController.logout)//logout

module.exports = router
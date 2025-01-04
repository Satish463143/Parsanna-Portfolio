const verifyToken = require('../../middlewares/validateToken.middleware')
const { bodyValidator } = require('../../middlewares/validator.middleware')
const authController = require('./auth.controller')
const { LoginDTO } = require('./auth.request')

const loginCheck = require('../../middlewares/auth.middleware')
const router = require('express').Router()

router.post('/login', bodyValidator(LoginDTO), authController.login) //login

router.get('/me',loginCheck, verifyToken, authController.getLoggedInUser)
    
router.post('/logout',verifyToken, authController.logout)//logout

module.exports = router
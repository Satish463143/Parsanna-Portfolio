const loginCheck = require('../../middlewares/auth.middleware')
const { bodyValidator } = require('../../middlewares/validator.middleware')
const ContactController = require('./contact.controller')
const {contactDTO} = require('./contact.request')

const router = require('express').Router()

router.route('/')
    .post( bodyValidator(contactDTO), ContactController.create)
    .get(loginCheck,ContactController.index)


module.exports = router
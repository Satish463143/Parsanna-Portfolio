const loginCheck = require('../../middlewares/auth.middleware')
const { bodyValidator } = require('../../middlewares/validator.middleware')
const FeaturedController = require('./featured.controller')
const { featuredDTO } = require('./featured.request')

const router = require('express').Router()

router.route('/')
    .post(loginCheck, bodyValidator(featuredDTO), FeaturedController.create)
    .get(FeaturedController.index)

router.route('/:id')
    .get(loginCheck, FeaturedController.show)
    .put(loginCheck, bodyValidator(featuredDTO), FeaturedController.update)
    .delete(loginCheck, FeaturedController.delete)

module.exports = router
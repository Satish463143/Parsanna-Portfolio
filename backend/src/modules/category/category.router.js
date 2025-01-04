const loginCheck = require('../../middlewares/auth.middleware')
const CategoryController = require('./category.controller')
const router = require('express').Router()

router.route('/')
    .post(loginCheck,  CategoryController.create)
    .get(CategoryController.index)

router.route('/:id')
    .get(loginCheck, CategoryController.show)
    .put(loginCheck,  CategoryController.update)
    .delete(loginCheck, CategoryController.delete)

module.exports = router
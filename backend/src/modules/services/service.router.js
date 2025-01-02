const router = require('express').Router()
const { FileFilterType } = require('../../config/constant.config')
const loginCheck = require('../../middlewares/auth.middleware')
const hasPermission = require('../../middlewares/rbac.middlewares')
const { setPath, uplaodFile } = require('../../middlewares/uploader.middleware')
const {bodyValidator} = require('../../middlewares/validator.middleware')
const ServiceController = require('./service.controller')
const { serviceDTO } = require('./service.request')

router.route('/')
    .post(loginCheck, hasPermission('admin'), setPath('service'),uplaodFile(FileFilterType.IMAGE).single('image'),bodyValidator(serviceDTO), ServiceController.create )//create
    .get()//list all

router.route('/:id')
    .get() //detailById
    .put() //editById
    .delete() //deleteById

    module.exports = router
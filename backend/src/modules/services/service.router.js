const router = require('express').Router()
const { FileFilterType } = require('../../config/constant.config')
const loginCheck = require('../../middlewares/auth.middleware')
const { setPath, uplaodFile } = require('../../middlewares/uploader.middleware')
const {bodyValidator} = require('../../middlewares/validator.middleware')
const ServiceController = require('./service.controller')
const { serviceDTO, serviceUpdateDTO } = require('./service.request')

router.route('/')
    .post(loginCheck, setPath('service'),uplaodFile(FileFilterType.IMAGE).single('image'),bodyValidator(serviceDTO), ServiceController.create )//create
    .get( ServiceController.index)//list all

router.route('/:id')
    .get(loginCheck, ServiceController.show ) //detailById
    .put(loginCheck, setPath('service'), uplaodFile(FileFilterType.IMAGE).single('image'),bodyValidator(serviceUpdateDTO), ServiceController.update) //editById
    .delete(loginCheck, ServiceController.delete) //deleteById


module.exports = router
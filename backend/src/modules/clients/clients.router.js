const router = require('express').Router()
const { FileFilterType } = require('../../config/constant.config')
const loginCheck = require('../../middlewares/auth.middleware')
const { setPath, uplaodFile } = require('../../middlewares/uploader.middleware')
const {bodyValidator} = require('../../middlewares/validator.middleware')
const ClientsController = require('./clients.controller')
const { clientsDTO, clientsUpdateDTO } = require('./clients.request')

router.route('/')
    .post(loginCheck, setPath('clients'),uplaodFile(FileFilterType.IMAGE).single('image'),bodyValidator(clientsDTO), ClientsController.create )//create
    .get( ClientsController.index)//list all

router.route('/:id')
    .get(loginCheck, ClientsController.show ) //detailById
    .put(loginCheck, setPath('clients'), uplaodFile(FileFilterType.IMAGE).single('image'),bodyValidator(clientsUpdateDTO), ClientsController.update) //editById
    .delete(loginCheck, ClientsController.delete) //deleteById


module.exports = router
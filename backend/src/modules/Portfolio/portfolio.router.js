const { FileFilterType } = require('../../config/constant.config')
const loginCheck = require('../../middlewares/auth.middleware')
const { setPath, uplaodFile } = require('../../middlewares/uploader.middleware')
const { bodyValidator } = require('../../middlewares/validator.middleware')
const PortfolioController = require('./portfolio.controller')
const portfolioDTO = require('./portfolio.request')

const router = require('express').Router()

router.route('/')
    .post(loginCheck, setPath('portfolio'),uplaodFile(FileFilterType.IMAGE).array('imageUrl'), bodyValidator(portfolioDTO), PortfolioController.create)
    .get(PortfolioController.index)

router.route('/:id')
    .delete(loginCheck,PortfolioController.delete)

module.exports = router
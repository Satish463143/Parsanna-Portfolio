const router  = require("express").Router()
const authRouter = require("../modules/auth/auth.router")
const serviceRouter = require("../modules/services/service.router")
const featuredRouter = require("../modules/featuredPortfolio/featued.router")
const categoryRouter = require('../modules/category/category.router')
const contactRouter =require('../modules/contact/contact.router')
const clientsRouter = require('../modules/clients/clients.router')
const portfolioRouter = require('../modules/Portfolio/portfolio.router')


router.use('/auth',authRouter)
router.use('/service', serviceRouter)
router.use('/featuredPortfolio', featuredRouter)
router.use('/category', categoryRouter)
router.use('/contact', contactRouter)
router.use('/clients', clientsRouter)
router.use('/portfolio', portfolioRouter)

module.exports = router
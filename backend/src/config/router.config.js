const router  = require("express").Router()
const authRouter = require("../modules/auth/auth.router")
const serviceRouter = require("../modules/services/service.router")


router.use('/auth',authRouter)
router.use('/service', serviceRouter)
module.exports = router
const Joi = require('joi')
const { Status } = require('../../config/constant.config')

const featuredDTO = Joi.object({
    title:Joi.string().min(2).max(50).required(),
    description:Joi.string().allow(null, "").optional(),
    videoUrl:Joi.string().required(),
    videoImageUrl:Joi.string().required(),
    status: Joi.string().valid(...Object.values(Status)).default(Status.INACTIVE).required(),
})

module.exports = {featuredDTO}

const Joi = require('joi')

const featuredDTO = Joi.object({
    title:Joi.string().min(2).max(50).required(),
    description:Joi.string().required(),
    videoUrl:Joi.string().required(),
    videoImageUrl:Joi.string().required()
})

module.exports = {featuredDTO}

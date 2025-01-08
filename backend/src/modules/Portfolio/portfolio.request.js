const Joi = require('joi')
const { MediaType } = require('../../config/constant.config')

const portfolioDTO = Joi.object({
    imageUrl: Joi.array().items(Joi.string()).optional().min(1),
    category: Joi.array().items(Joi.string()).optional().default([]),
    videoUrl:Joi.string().optional().default(''),
    videoImageUrl:Joi.string().optional().default(''),
    thumbnail:Joi.string().optional().default(''),
    type:Joi.string().valid(...Object.values(MediaType)).required(),
    
})

module.exports = portfolioDTO
const Joi = require("joi")

const serviceDTO= Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.string().required(),    
})
const serviceUpdateDTO= Joi.object({
    title:Joi.string(),
    description:Joi.string(),
    image:Joi.string(),
})

module.exports ={
    serviceDTO,serviceUpdateDTO
}
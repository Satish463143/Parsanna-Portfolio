const Joi = require("joi")

const serviceDTO= Joi.object({
    title:Joi.string().email().required(),
    description:Joi.string().required(),
    image:Joi.string().required(),    
})
const serviceUpdateDTO= Joi.object({
    title:Joi.string().email().required(),
    description:Joi.string().required(),
    image:Joi.string(),
})

module.exports ={
    serviceDTO,serviceUpdateDTO

}
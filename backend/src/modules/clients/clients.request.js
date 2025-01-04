const Joi = require("joi")

const clientsDTO= Joi.object({
    link:Joi.string().allow(null, "").optional(),
    image:Joi.string().required(),    
})
const clientsUpdateDTO= Joi.object({
    link:Joi.string().allow(null, "").optional(),
    image:Joi.string(), 
})

module.exports ={
    clientsDTO,clientsUpdateDTO}
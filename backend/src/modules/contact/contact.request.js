const Joi = require('joi')

const contactDTO = Joi.object({
    fullName:Joi.string().min(2).max(50).required(),
    email:Joi.string().required(),
    number:Joi.string().required(),
    message:Joi.string().allow(null, "").optional()
})

module.exports = {contactDTO}

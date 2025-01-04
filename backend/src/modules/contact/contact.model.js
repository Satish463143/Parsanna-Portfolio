const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    message:{
        type:String,
    }

},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const contactModel =  new mongoose.model('Contact', contactSchema)
module.exports = contactModel
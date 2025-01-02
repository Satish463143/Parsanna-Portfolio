const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        min:2,
        max:50,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const serviceModel = new mongoose.model('Service', serviceSchema)

module.exports = serviceModel

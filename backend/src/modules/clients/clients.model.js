const mongoose = require('mongoose')

const clientsSchema = new mongoose.Schema({    
    link:{
        type:String,
    },
    image:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
},
{
    timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const clientsModel = new mongoose.model('Client', clientsSchema)

module.exports = clientsModel

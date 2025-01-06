const { required } = require('joi')
const mongoose = require('mongoose')
const { Status } = require('../../config/constant.config')

const featruedSchems = new mongoose.Schema({
    title:{
        type:String,
        required:true,  
    },
    description:{
        type:String,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    videoImageUrl:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:[...Object.values(Status)],
        default:Status.INACTIVE
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },

},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const featuredModel =  new mongoose.model('FeaturedPortfolio', featruedSchems)
module.exports = featuredModel
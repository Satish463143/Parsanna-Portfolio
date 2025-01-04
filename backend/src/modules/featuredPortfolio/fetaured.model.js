const { required } = require('joi')
const mongoose = require('mongoose')

const featruedSchems = new mongoose.Schema({
    title:{
        type:String,
        required:true,  
    },
    description:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    videoImageUrl:{
        type:String,
        required:true,
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
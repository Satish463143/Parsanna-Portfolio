const { required } = require("joi");
const mongoose = require("mongoose");
const {Status} = require('../../config/constant.config')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        min:2,
        max:50,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:[...Object.values(Status)],
        default:Status.INACTIVE
    },
    token:{
        type:String,
        default:null
    },
    refreshToken:{
        type:String,
        default:null
    },
    activeFor:{ type: Date },

},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true,
})

const userModele = new mongoose.model('User', userSchema)

module.exports = userModele
const userModele = require("./user.model");
const userService = require("./user.service");
const {Status} = require('../../config/constant.config')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

class authController {
    login= async(req,res,next)=>{
        try{
            const {email,password} = req.body;
            const user = await userService.getSingleUserByFilter({
                email:email
            })

            if(bcrypt.compareSync(password, user.password)){
                if(user.status === Status.ACTIVE){
                    const token = jwt.sign({
                        sub:user._id,

                    },process.env.JWT_SECRET,
                    // {
                    //     expiresIn:"1 day",
                    //     algorithm:
                    // }
                )
                const refreshToken = jwt.sign({
                    sub:user._id,
                    type:"refresh"

                },process.env.JWT_SECRET,
                {
                    expiresIn:"1 day",
                }
                )
                await userModele.findByIdAndUpdate(user._id,{token, refreshToken})
                res.json({
                    result:{
                        userDetails:{
                            _id:user._id,
                            name:user.name,
                            email:user.email
                        },
                        token:{token,refreshToken}
                    },
                    message:"Login sucessful",
                    meta:null
                })
                }else{
                    throw{status:422, message:"Your account has not been activated yet"}
                }
            }
            else{
                throw{status:422, message:"Credentials does no match"}
            }           
        }
        catch(exception){
            console.log(exception)
            next(exception)
        }

    }
    getLoggedInUser= (req, res,next)=>{
        try{
            res.json({
                result:req.authUser,
                message:"Your profile",
                meta:null
            })

        }catch(exception){
            next(exception)
        }
    }
    logout =async(req,res,next)=>{
        try{
            const userId = req.user._id
            await userModele.findByIdAndUpdate(userId,{token:null, refreshToken:null})
            res.json({
                result:null,
                message:"Logout sucessfull",
                meta:null
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}
module.exports = new authController
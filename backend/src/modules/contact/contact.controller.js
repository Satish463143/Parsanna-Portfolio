
const ContactService = require('./contact.service')

class ContactController {
    create = async(req,res,next)=>{
        try{
            const data = req.body
            const response = await ContactService.create(data)
            res.json({
                result:response,
                messaage:"contact  created",
                meta:null
            })

        }catch(exception){
            conosle.log(exception)
            next(exception)
        }
    }
    index = async(req,res,next)=>{
        try{

            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 10
            const skip = (page - 1)*limit

            let filter = {}

            if(req.query.search){
                filter = {
                    fullName:new RegExp(req.query.search , "i")
                }
            }

            const {count, data} = await ContactService.listData({
                skip:skip,
                limit:limit,
                filter:filter
            })

            res.json({
                result:data,
                message:'list of all queries',
                meta:{
                    currentPage:page,
                    total:count,
                    limit:limit
                }
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
     
    
}

module.exports = new ContactController
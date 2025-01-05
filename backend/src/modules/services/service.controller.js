const { uploadImage } = require("../../config/cloudinary.config")
const { deleteFile } = require("../../utilities/helper")
const ServicesService = require("./services.service")

class ServiceController {
    serviceDetails;
    create= async(req,res,next)=>{
        try{
            const data = req.body
            data.image = await uploadImage('./public/uploads/service/' + req.file.filename)
            deleteFile('./public/uploads/service/' + req.file.filename)

            data.createdBy = req.authUser._id

            const response = await ServicesService.create(data)

            res.json({
                result:response,
                message:'Service created',
                meta:null
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    index= async(req,res,next)=>{
        try{
            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 10
            const skip = (page - 1)*limit

            let filter = {}

            if(req.query.search){
                filter = {
                    title:new RegExp(req.query.search , "i")
                }
            }

            const {count, data} = await ServicesService.listData({
                skip:skip,
                limit:limit,
                filter:filter
            })

            res.json({
                result:data,
                message:'list of all service',
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

    #validate = async (id) => {
        try {
            if (!id) {
                throw { status: 400, message: "Id is required" }
            }
            this.serviceDetails = await ServicesService.getIdbyFilter({
                _id: id
            })
            if (!this.serviceDetails) {
                throw { status: 400, message: "Service Doesn't Exit" }
            }
        } catch (exception) {
            throw exception
        }

    }

    show= async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            res.json({
                result:this.serviceDetails,
                message:"data fetched by id",
                meta:null
            })
        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    update= async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)

            const data = req.body

            if (req.file) {
                data.image = await uploadImage('./public/uploads/service/' + req.file.filename)
                deleteFile('./public/uploads/service/' + req.file.filename)
            }
            
            const response =await ServicesService.update(data, id)

            res.json({
                result:response,
                message:"Service updated",
                meta:null
            })
            


        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    delete= async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)

            const response = await ServicesService.delete(id)
            res.json({
                result: response,
                message: "Servicce deleted Sucessfuly",
                meta: null
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}

module.exports = new ServiceController
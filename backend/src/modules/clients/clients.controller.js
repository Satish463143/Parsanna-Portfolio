const { uploadImage } = require("../../config/cloudinary.config")
const { deleteFile } = require("../../utilities/helper");
const ClientsService = require("./clients.service");

class ClientsController {
    clientsDetails;
    create= async(req,res,next)=>{
        try{
            const data = req.params

            data.image = await uploadImage('./public/uploads/clients/' + req.file.filename)
            deleteFile('./public/uploads/clients/' + req.file.filename)

            data.createdBy = req.authUser._id

            const response = await ClientsService.create(data)

            res.json({
                result:response,
                message:'Clients created',
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

            const {count, data} = await ClientsService.listData({
                skip:skip,
                limit:limit,
                filter:filter
            })

            res.json({
                result:data,
                message:'list of all clients',
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
            this.clientsDetails = await ClientsService.getIdbyFilter({
                _id: id
            })
            if (!this.clientsDetails) {
                throw { status: 400, message: "clients Doesn't Exit" }
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
                result:this.clientsDetails,
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
                data.image = await uploadImage('./public/uploads/clients/' + req.file.filename)
                deleteFile('./public/uploads/clients/' + req.file.filename)
            }
            
            const response =await ClientsService.update(data, id)

            res.json({
                result:response,
                message:"clients updated",
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

            const response = await ClientsService.delete(id)
            res.json({
                result: response,
                message: "clinets deleted Sucessfuly",
                meta: null
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}

module.exports = new ClientsController
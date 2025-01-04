const featuredService = require("./featured.service")
const FeaturedService = require("./featured.service")

class FeaturedController {
    featuredDetails;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            data.createdBy = req.authUser._id
            const response = await FeaturedService.create(data)

            res.json({
                result:response,
                messaage:"Featured portfolio created",
                meta:null
            })

        }catch(exception){
            conosle.log(exception)
            next(exception)
        }
    }
    index = async(req,res,next)=>{
        try{
            const list = await FeaturedService.listData()

            res.json({
                result:list,
                message:"List of featured portfolio",
                meta:null
            })

        }catch(exception){
            conosle.log(exception)
            next(exception)
        }
    }
     #validate = async (id) => {
            try {
                if (!id) {
                    throw { status: 400, message: "Id is required" }
                }
                this.featuredDetails = await FeaturedService.getIdbyFilter({
                    _id: id
                })
                if (!this.featuredDetails) {
                    throw { status: 400, message: "Service Doesn't Exit" }
                }
            } catch (exception) {
                throw exception
            }
    
        }

    show = async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            res.json({
                result:this.featuredDetails,
                message:"data fetched by id",
                meta:null
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    update = async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)

            const data = req.body

            const response =  await FeaturedService.update(data, id)
            res.json({
                result:response ,
                message:"data fetched by id",
                meta:null
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    delete = async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)

            const response =  await FeaturedService.delete(id)

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    
}

module.exports = new FeaturedController
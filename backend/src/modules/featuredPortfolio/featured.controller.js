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
            const page = req.query.page ||1
            const limit = +req.query.limit || 10;
            const skip = (page-1) *limit

            

            let filter = {}
           if(req.query.search){
                filter = {
                    title: new RegExp(req.query.search, 'i')
                }
           }
           const {count, data} = await FeaturedService.listData({
            skip:skip,
            filter:filter,
            limit:limit
           })
           
            res.json({
                result:data,
                message:"List of featured portfolio",
                meta:{
                    currentPage:page,
                    total:count,
                    limit:limit
                }
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
            res.json({
                result:response ,
                message:"data deleted",
                meta:null
            })
        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    listForHome = async(req,res,next)=>{
        try{
            const list = await FeaturedService.listData({
                limit: 5,
                filter: {
                    status: Status.ACTIVE
                }
            })
            res.json({
                result: list,
                message: "List of active featured Portfolio",
                meta: null
            })
        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    
}

module.exports = new FeaturedController
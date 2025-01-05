const CategoryService = require("./category.service");

class CategoryController {
    categoryDetails;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            data.createdBy = req.authUser._id

            const response = await CategoryService.create(data)

            res.json({
                result:response,
                messaage:"category portfolio created",
                meta:null
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    index = async(req,res,next)=>{
        try{
            const list = await CategoryService.listData()

            res.json({
                result:list,
                message:"List of category",
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
                this.categoryDetails = await CategoryService.getIdbyFilter({
                    _id: id
                })
                if (!this.categoryDetails) {
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
                result:this.categoryDetails,
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

            const response =  await CategoryService.update(data, id)
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

            const response =  await CategoryService.delete(id)
            res.json({
                result:response,
                message:"category deleted",
                meta:null,
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }    
}

module.exports = new CategoryController
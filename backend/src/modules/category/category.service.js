const categoryModel = require("./category.model")

class CategoryService {
    create= async(data)=>{
        try{
            const response = new categoryModel(data)
            return await response.save()

        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    listData = async(filter)=>{
        try{
            const data = await categoryModel.find(filter)
            return data

        }catch(exception){
            console.log(exception)
           throw exception
        }
    }
    getIdbyFilter = async(filter)=>{
        try{
            const data = await categoryModel.findOne(filter)
                .populate("createdBy", ["_id", "email", "name"])
            return data 

        }catch(exception){
            console.log(exception)
           throw exception
        }

    }
    update = async(data, id)=>{
        try{
            const response = await categoryModel.findByIdAndUpdate(id, { $set: data }, { new: true })
            return response
        }
        catch(exception){
            console.log(exception)
           throw exception
        }
    }
    delete = async()=>{
        try {
            const response = await categoryModel.findByIdAndDelete(id)
            if (!response) {
                throw { status: 404, message: "Category Not Found" }
            }
            return response
        } catch (exception) {
            console.log(exception)
            throw exception
        }
    }

}

module.exports =new CategoryService
const featuredModel = require("./fetaured.model")

class FeaturedService {
    create= async(data)=>{
        try{
            const response = new featuredModel(data)
            return await response.save()

        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    listData = async(filter)=>{
        try{
            const data = await featuredModel.find(filter)
            return data

        }catch(exception){
            console.log(exception)
           throw exception
        }
    }
    getIdbyFilter = async(filter)=>{
        try{
            const data = await featuredModel.findOne(filter)
                .populate("createdBy", ["_id", "email", "name"])
            return data 

        }catch(exception){
            console.log(exception)
           throw exception
        }

    }
    update = async(data, id)=>{
        try{
            const response = await featuredModel.findByIdAndUpdate(id, { $set: data }, { new: true })
            return response
        }
        catch(exception){
            console.log(exception)
           throw exception
        }
    }
    delete = async()=>{
        try {
            const response = await featuredModel.findByIdAndDelete(id)
            if (!response) {
                throw { status: 404, message: "Feaured portfolio Not Found" }
            }
            return response
        } catch (exception) {
            console.log(exception)
            throw exception
        }
    }

}

module.exports =new FeaturedService
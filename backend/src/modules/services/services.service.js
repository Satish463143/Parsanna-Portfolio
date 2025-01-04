const serviceModel = require("./service.model")

class ServicesService {
    create = async(data)=>{
        try{
            const response =  new serviceModel(data)
            return await response.save() 
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    listData= async({skip, filter, limit})=>{
        try{
            const count = await serviceModel.countDocuments(filter)
            const data = await serviceModel.find(filter)
                .populate("createdBy" , ["name" , "email", "_id"])
                .sort({_id : "desc"})
                .limit(limit)
                .skip(skip)
            return {count, data}
        }catch(exception){
            console.log(exception)
            throw exception
        }        
    }
    getIdbyFilter = async(filter)=>{
        try{
            const serviceDetails = await serviceModel.findOne(filter)
                .populate("createdBy" , ["name" , "email", "_id"])
            return serviceDetails
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    update = async(data, id)=>{
        try{
            const response = await serviceModel.findByIdAndUpdate(id, {$set:data}, {new:true})
            return response

        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    delete = async(id) =>{
        try{
            const response = await serviceModel.findByIdAndDelete(id)
                if (!response) {
                    throw { status: 404, message: "Collection Not Found" }
                }
            return response

        }catch(exception){
            console.log(exception)
            throw exception
        }

    }
}

module.exports = new ServicesService
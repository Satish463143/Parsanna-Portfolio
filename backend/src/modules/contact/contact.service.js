const contactModel = require("./contact.model")

class ContactService {
    create= async(data)=>{
        try{
            const response = new contactModel(data)
            return await response.save()

        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    listData = async(filter)=>{
        try{
            const count = await contactModel.countDocuments(filter)
            const data = await contactModel.find(filter)
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

}

module.exports =new ContactService
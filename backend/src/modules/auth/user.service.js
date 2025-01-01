const userModele = require("./user.model");

class UserService {

    getSingleUserByFilter = async (filter)=>{
        try{
            const userDetails = await userModele.findOne(filter);
                if(userDetails){
                    return userDetails
                }else{
                    throw {status:404, message:"User does not exits"}
                }
        }
        catch(exception){
           throw exception
        }
       
    }
}
module.exports = new UserService
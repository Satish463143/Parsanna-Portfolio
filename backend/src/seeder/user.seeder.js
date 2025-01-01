const bcrypt = require("bcryptjs")
const userModele = require("../modules/auth/user.model")
require('../config/db.config')
const {Status} = require('../config/constant.config')

const adminUser = [
    {
        name:"Atish Mahato",
        email:"mahatoatish25@gmail.com",
        password: bcrypt.hashSync("@!Admin@123",10),
        status:Status.ACTIVE
    }
]

const seedUser = async()=>{
    try{
        await Promise.all(
            adminUser.map(async (user) => {
                try {
                  const userExisting = await userModele.findOne({ email: user.email });
                  if (!userExisting) {
                    const userObj = new userModele(user);
                    await userObj.save();
                  }
                } catch (err) {
                  console.log(`Error seeding user ${user.email}:`, err);
                }
              })
        )
        process.exit(1)
    }catch(exception){
        console.log(exception)
    }
}

seedUser();
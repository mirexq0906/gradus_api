const { UserData } = require('../models/models')
class UserDataRouter {

    async getOne(req, res) { 
        const {userId} = req.params 
        const userData = await UserData.findOne( 
            { 
                where: {userId}, 
            }, 
        ) 
        return res.json(userData) 
    }


    async update(req, res) { 
        const {userId} = req.params
        const {name, date, phone, adress} = req.body 
        const userData = await UserData.update( 
            { 
                name, date, phone, adress 
            }, 
            { 
                where: {userId},  
            } 
        ) 

        return res.json(userData)  
    } 
}
module.exports = new UserDataRouter()
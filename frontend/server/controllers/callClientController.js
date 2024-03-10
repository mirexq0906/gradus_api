const { CallClient } = require('../models/models')
class CallClientRouter {


    async create(req, res) { 
        try {
            const {name, phone} = req.body 
            const callClient = await CallClient.create({name, phone}) 
            return res.json(callClient) 
        
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors });
            } 
        }
    }

 
    async delete(req, res) {
        const {id} = req.params

        const callClient = await CallClient.destroy(
            {
                where: {id},
            },
        )
        return res.json(callClient)
    }


    async getAll(req, res) { 
        const callClient = await CallClient.findAll() 
        return res.json(callClient) 
    }

}
module.exports = new CallClientRouter()
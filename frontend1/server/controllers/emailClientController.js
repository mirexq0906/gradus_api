const { EmailClient } = require('../models/models')
class EmailClientRouter {

    async create(req, res) { 
        try {
            const {email} = req.body 
            const emailClient = await EmailClient.create({email}) 
            return res.json(emailClient) 
        
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors });
            } 
        }
    }


    async delete(req, res) {
        const {id} = req.params

        const emailClient = await EmailClient.destroy(
            {
                where: {id},
            },
        )
        return res.json(emailClient)
    }


    async getAll(req, res) { 
        const emailClient = await EmailClient.findAll() 
        return res.json(emailClient) 
    }

}
module.exports = new EmailClientRouter()
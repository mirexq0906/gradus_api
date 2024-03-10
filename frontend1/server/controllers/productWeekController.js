const { ProductWeek } = require('../models/models')
class ProductWeekRouter {


    async create(req, res) { 
        try {
            const {productId} = req.body 
            const productWeek = await ProductWeek.create({productId}) 
            return res.json(productWeek) 
        
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors });
            } 
        }
    }


    async delete(req, res) {
        const {id} = req.params

        const productWeek = await ProductWeek.destroy(
            {
                where: {id},
            },
        )
        return res.json(productWeek)
    }


    async getAll(req, res) { 
        const productWeek = await ProductWeek.findAll() 
        return res.json(productWeek) 
    }

    async getOne(req, res) { 
        const {id} = req.params 
        const productWeek = await ProductWeek.findOne( 
            { 
                where: {id}, 
            }, 
        ) 
        return res.json(productWeek) 
    }

}
module.exports = new ProductWeekRouter()
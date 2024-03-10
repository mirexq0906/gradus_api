const { Category } = require('../models/models')
class CategoryRouter {


    async create(req, res) { 
        try {
            const {name, url} = req.body 
            const category = await Category.create({name, url}) 
            return res.json(category) 
        
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors });
            } 
        }
    }


    async delete(req, res) {
        const {id} = req.params

        const category = await Category.destroy(
            {
                where: {id},
            },
        )
        return res.json(category)
    }


    async getAll(req, res) { 
        const category = await Category.findAll() 
        return res.json(category) 
    }

    async getOne(req, res) { 
        const {id} = req.params 
        const category = await Category.findOne( 
            { 
                where: {id}, 
            }, 
        ) 
        return res.json(category) 
    }


    async update(req, res) { 
        try {
            const {id} = req.params
            const {name, url} = req.body 
            const category = await Category.update( 
                { 
                    name, url 
                }, 
                { 
                    where: {id}, 
                } 
            ) 
            return res.json(category) 
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors });
            } 
        }
    }
}
module.exports = new CategoryRouter()
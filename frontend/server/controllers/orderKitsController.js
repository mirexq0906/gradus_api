const { OrderKits} = require('../models/models')
class OrderKitsRouter {

    async create(req, res) {
        try {
            const {userId, products, phone, fullName, totalPrice} = req.body 
            const productsJson = JSON.parse(products)
            const orderKits = await OrderKits.create({userId, products : productsJson, phone, fullName, totalPrice}) 
    
            return res.json("Заказ успешно отправлен. Наш менеджер свяжется с вами в ближайшее время") 
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors });
            } 
        }
    } 

    async delete(req, res) {
        const {id} = req.params
        const orderKits = await OrderKits.destroy(
            {
                where: {id},
            },
        )
        return res.json(orderKits)  
    }

    async getOne(req, res) { 
        const {id} = req.params 
        const orderKits = await OrderKits.findOne( 
            { 
                where: {id}, 
            }, 
        ) 
        return res.json(orderKits) 
    }

    async getAll(req, res) {  
        const orderKits = await OrderKits.findAll() 
        return res.json(orderKits) 
    }
}
module.exports = new OrderKitsRouter()    
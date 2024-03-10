const { Order, Basket } = require('../models/models')
class OrderRouter {

    async create(req, res) { 
        const {userId, products, status, phone, fullName, email, adress, payment, delivery, totalPrice} = req.body 
        const productsJson = JSON.parse(products)
        const order = await Order.create({userId, products : productsJson, status, phone, fullName, email, adress, payment, delivery, totalPrice}) 
        const basket = await Basket.destroy(
            {
                where: {userId},
            },
        )
        return res.json("Заказ успешно отправлено. Наш менеджер свяжется с вами в ближайшее время") 
    } 

    async delete(req, res) {
        const {id} = req.params
        const order = await Order.destroy(
            {
                where: {id},
            },
        )
        return res.json(order)  
    }

    async getOne(req, res) { 
        const {userId} = req.params 
        const order = await Order.findOne( 
            { 
                where: {userId}, 
            }, 
        ) 
        return res.json(order) 
    }

    async getOneOrder(req, res) { 
        const {id} = req.params 
        const order = await Order.findOne( 
            { 
                where: {id}, 
            }, 
        ) 
        return res.json(order) 
    }

    async getAll(req, res) {  
        const order = await Order.findAll() 
        return res.json(order) 
    }

    async update(req, res) { 
        const {id} = req.params 
        const {status} = req.body 
        const order = await Order.update( 
            { 
                status
            }, 
            { 
                where: {id}, 
            } 
        ) 
        return res.json(order) 
    }
}
module.exports = new OrderRouter()    
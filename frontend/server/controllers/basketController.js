const { Basket } = require('../models/models')
class BasketRouter {

    async create(req, res) { 
        const { userId, productId } = req.body
        const baskets = await Basket.findAll(
            {
                where: {userId}
            }
        )
        
        for(let i = 0; i < baskets.length; i++) {
            if(baskets[i].productId == productId) {
                return res.json("Товар уже добавлен") 
            }
        } 
        const basket = await Basket.create({userId, productId})
        return res.json("Товар успешно добавлен") 
    }

    async getAll(req, res) { 
        const {id} = req.params 
        const basket = await Basket.findAll(
            {
                where: {userId: id}
            }
        )
        return res.json(basket)   
    }

    async delete(req, res) {
        const { userId, productId } = req.body

        const basket = await Basket.findAll(
            {
                where: {userId, productId}
            }
        )
        if (basket.length) {
            const basket = await Basket.destroy(
                {
                    where: {userId, productId},  
                },
            )
        }
        return res.json("Продукт удален")
    }
}
module.exports = new BasketRouter()
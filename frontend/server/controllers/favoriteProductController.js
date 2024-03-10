const { FavoriteProduct } = require('../models/models')
class FavoriteProductRouter {

    async createAndDelete(req, res) { 
        const { userId, productId } = req.body

        const favoriteProducts = await FavoriteProduct.findAll(
            {
                where: {userId, productId}
            }
        )

        if (favoriteProducts.length) {
            const favoriteProduct = await FavoriteProduct.destroy(
                {
                    where: {userId, productId},  
                },
            )
            return res.json(false)
        }
        else {
            const favoriteProduct = await FavoriteProduct.create({userId, productId})
            return res.json(true)
        }
    }

    async getAll(req, res) { 
        const {id} = req.params 
        const favoriteProduct = await FavoriteProduct.findAll(
            {
                where: {userId: id}
            }
        )
        return res.json(favoriteProduct) 
    }
}
module.exports = new FavoriteProductRouter()
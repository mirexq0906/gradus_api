const Router = require('express') 
const router = new Router() 
const favoriteProductRouter = require('../controllers/favoriteProductController')
 
router.post('/', favoriteProductRouter.createAndDelete)
router.get('/:id', favoriteProductRouter.getAll)

module.exports = router
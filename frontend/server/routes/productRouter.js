const Router = require('express') 
const router = new Router() 
const productRouter = require('../controllers/productController')
 

router.post('/', productRouter.create)
router.post('/:id', productRouter.delete)
router.get('/', productRouter.getAll)
router.get('/:id', productRouter.getOne)
router.put('/update/:id', productRouter.update)

 
module.exports = router
const Router = require('express') 
const router = new Router() 
const orderRouter = require('../controllers/orderController')
 

router.post('/', orderRouter.create)
router.post('/:id', orderRouter.delete)
router.get('/', orderRouter.getAll)
router.get('/:userId', orderRouter.getOne)
router.get('/one/:id', orderRouter.getOneOrder)
router.put('/update/:id', orderRouter.update)     

 
module.exports = router
const Router = require('express') 
const router = new Router() 
const orderKitsRouter = require('../controllers/orderKitsController')
 

router.post('/', orderKitsRouter.create)
router.post('/:id', orderKitsRouter.delete)
router.get('/', orderKitsRouter.getAll)
router.get('/:id', orderKitsRouter.getOne)

 
module.exports = router
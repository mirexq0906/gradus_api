const Router = require('express') 
const router = new Router() 
const productWeekRouter = require('../controllers/productWeekController')
 

router.post('/', productWeekRouter.create)
router.post('/:id', productWeekRouter.delete)
router.get('/', productWeekRouter.getAll)
router.get('/:id', productWeekRouter.getOne)

 
module.exports = router
const Router = require('express') 
const router = new Router() 
const categoryRouter = require('../controllers/categoryController')
const checkRole = require('../middleware/checkRoleMiddleware') 
 

router.post('/', categoryRouter.create)
router.post('/:id', categoryRouter.delete)
router.get('/', categoryRouter.getAll)
router.get('/:id', categoryRouter.getOne)
router.put('/update/:id', categoryRouter.update) 

 
module.exports = router
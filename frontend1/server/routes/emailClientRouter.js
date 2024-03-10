const Router = require('express') 
const router = new Router() 
const emailClientRouter = require('../controllers/emailClientController')
 

router.post('/', emailClientRouter.create)
router.post('/:id', emailClientRouter.delete)
router.get('/', emailClientRouter.getAll) 

 
module.exports = router
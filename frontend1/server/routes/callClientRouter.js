const Router = require('express') 
const router = new Router() 
const callClientRouter = require('../controllers/callClientController')
 

router.post('/', callClientRouter.create)
router.post('/:id', callClientRouter.delete)
router.get('/', callClientRouter.getAll) 

 
module.exports = router
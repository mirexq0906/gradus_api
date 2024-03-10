const Router = require('express') 
const router = new Router() 
const basketRouter = require('../controllers/basketController')
 
router.post('/', basketRouter.create)
router.post('/delete', basketRouter.delete)
router.get('/:id', basketRouter.getAll)

module.exports = router
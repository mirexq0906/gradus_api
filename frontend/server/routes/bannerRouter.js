const Router = require('express') 
const router = new Router() 
const bannerRouter = require('../controllers/bannerController')
 

router.post('/', bannerRouter.create)
router.post('/:id', bannerRouter.delete)
router.get('/', bannerRouter.getAll)
router.get('/:id', bannerRouter.getOne)

 
module.exports = router
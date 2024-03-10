const Router = require('express') 
const router = new Router() 
const videoRouter = require('../controllers/videoController')
 

router.post('/', videoRouter.create)
router.post('/:id', videoRouter.delete)
router.get('/', videoRouter.getAll)
router.get('/:id', videoRouter.getOne)
router.put('/update/:id', videoRouter.update)

 
module.exports = router
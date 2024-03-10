const Router = require('express') 
const router = new Router() 
const userDataRouter = require('../controllers/userDataController')
 

router.get('/:userId', userDataRouter.getOne)
router.put('/update/:userId', userDataRouter.update)  

 
module.exports = router 
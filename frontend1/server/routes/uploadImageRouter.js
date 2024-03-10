const Router = require('express') 
const router = new Router() 
const uploadImageRouter = require('../controllers/uploadImageController')
 

router.post('/', uploadImageRouter.create)

  
module.exports = router
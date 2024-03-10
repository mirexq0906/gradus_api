const Router = require('express') 
const router = new Router() 
const blogRouter = require('../controllers/blogController')
 

router.post('/', blogRouter.create)
router.post('/:id', blogRouter.delete)
router.get('/', blogRouter.getAll)
router.get('/one/:id', blogRouter.getOne)
router.get('/:slug', blogRouter.getOneBlog) 
router.put('/update/:id', blogRouter.update)  
router.put('/update-views/:id', blogRouter.updateViews)  
 
module.exports = router
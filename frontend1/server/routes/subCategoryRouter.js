const Router = require('express') 
const router = new Router() 
const subCategoryRouter = require('../controllers/subCategoryController')
 

router.post('/', subCategoryRouter.create)
router.post('/:id', subCategoryRouter.delete)
router.get('/', subCategoryRouter.getAll)
router.get('/:id', subCategoryRouter.getOne)
router.put('/update/:id', subCategoryRouter.update)

 
module.exports = router
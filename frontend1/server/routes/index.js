const Router = require('express') 
const router = new Router() 
const categoryRouter = require('./categoryRouter')
const subCategoryRouter = require('./subCategoryRouter')
const productRouter = require('./productRouter')
const blogRouter = require('./blogRouter')
const videoRouter = require('./videoRouter')
const uploadImageRouter = require('./uploadImageRouter')
const userRouter = require('./userRouter')
const userDataRouter = require('./userDataRouter')
const basketRouter = require('./basketRouter')
const favoriteProductRouter = require('./favoriteProductRouter')
const orderRouter = require('./orderRouter')
const callClientRouter = require('./callClientRouter')
const emailClientRouter = require('./emailClientRouter')
const orderKitsRouter = require('./orderKitsRouter')
const bannerRouter = require('./bannerRouter')
const productWeekRouter = require('./productWeekRouter')

router.use('/category', categoryRouter) 
router.use('/subcategory', subCategoryRouter) 
router.use('/product', productRouter)
router.use('/blog', blogRouter)
router.use('/video', videoRouter)
router.use('/upload-image', uploadImageRouter) 
router.use('/user', userRouter) 
router.use('/user-data', userDataRouter) 
router.use('/basket', basketRouter)
router.use('/favorites', favoriteProductRouter)
router.use('/order', orderRouter)
router.use('/call-client', callClientRouter)
router.use('/email-client', emailClientRouter)
router.use('/order-kits', orderKitsRouter)
router.use('/banner', bannerRouter)
router.use('/product-week', productWeekRouter)

module.exports = router
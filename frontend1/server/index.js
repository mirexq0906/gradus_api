require('dotenv').config()
const path = require('path')
const express = require('express') 

const sequelize = require('./db') 
  
const cors = require('cors')   
const router = require('./routes/index')
const multer = require('multer');
const upload = multer({ dest: 'static/' });
 
const PORT = process.env.PORT || 5000
 
const app = express() 
app.use(cors())  
app.use(express.json()) 
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'gallery', maxCount: 5 }]), router)

const start = async () => { 
    try { 
        await sequelize.authenticate() 
        await sequelize.sync() 
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) 
    } catch (e) { 
        console.log(e) 
    } 
} 
 
 
start()
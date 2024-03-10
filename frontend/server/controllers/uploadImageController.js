const uuid = require('uuid')
const path = require('path');
const fs = require('fs-extra')
class UploadImageRouter {

    async create(req, res) {
        const { file } = req.files;
        
        let fileType = "";
        if (file[0].mimetype == 'image/jpeg' || file[0].mimetype == 'image/jpg') {
            fileType = "jpg"
        } else if (file[0].mimetype == 'image/png') {
            fileType = "png"
        } 
        let fileName = uuid.v4() + "." + fileType
        fs.move(file[0].path, path.resolve(__dirname, '..', 'static', fileName))
        return res.json(fileName) 
    } 
 
} 
module.exports = new UploadImageRouter()
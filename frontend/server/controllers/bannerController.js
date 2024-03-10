const { Banner } = require('../models/models')
const uuid = require('uuid')
const path = require('path');
const fs = require('fs-extra');
class BannerRouter {

    async create(req, res) { 
        try {
            const {file} = req.files
            //Сохранение одной картинки
            let fileType = "";
            if(file[0].mimetype == 'image/jpeg' || file[0].mimetype == 'image/jpg') {
                fileType = "jpg"
            } else if (file[0].mimetype == 'image/png') {
                fileType = "png"
            }
            let fileName = uuid.v4() + "." + fileType
            fs.move(file[0].path, path.resolve(__dirname, '..', 'static', fileName))
            
            const banner = await Banner.create({img: fileName}) 
            return res.json(banner) 
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors })
            } else {
                res.json({ message: "Загрузите фото" })
            }
        }
    }

    async delete(req, res) {
        const { id } = req.params

        //id для удаления фото
        const bannerImg = await Banner.findOne(
            {
                where: {id},
            },
        )
        
        //удаление фотографии
        fs.remove(path.join(__dirname, '../static/' + bannerImg.img))

        const banner = await Banner.destroy(
            {
                where: { id },
            },
        )
        return res.json(banner)
    }

    async getOne(req, res) {
        const { id } = req.params
        const banner = await Banner.findOne(
            {
                where: { id },
            },
        )
        return res.json(banner)
    }

    async getAll(req, res) {
        const banner = await Banner.findAll()
        return res.json(banner)
    }
}
module.exports = new BannerRouter()
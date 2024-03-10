const { Product } = require('../models/models')
const uuid = require('uuid')
const path = require('path');
const fs = require('fs-extra');
class ProductRouter {

    async create(req, res) { 
        try {
            const {name, url, price, oldPrice, subCategoryId, categoryId, desc} = req.body 
            const {file, gallery} = req.files
            //Сохранение одной картинки
            let fileType = "";
            if(file[0].mimetype == 'image/jpeg' || file[0].mimetype == 'image/jpg') {
                fileType = "jpg"
            } else if (file[0].mimetype == 'image/png') {
                fileType = "png"
            } else if (file[0].mimetype == 'image/webp') {
                fileType = "webp"
            }
            let fileName = uuid.v4() + "." + fileType
            fs.move(file[0].path, path.resolve(__dirname, '..', 'static', fileName))
            //Сохранение нескольких картинок
            let fileGalleryName = []
            for(let i = 0; i < gallery.length; i++) {
                let galleryType = "";
                if(gallery[i].mimetype == 'image/jpeg' || gallery[i].mimetype == 'image/jpg') {
                    galleryType = "jpg"
                } else if (gallery[i].mimetype == 'image/png') {
                    galleryType = "png"
                } else if (gallery[i].mimetype == 'image/webp') {
                    fileType = "webp"
                }
                let filesName = uuid.v4() + `.${galleryType}`
                fs.move(gallery[i].path, path.resolve(__dirname, '..', 'static', filesName))
                fileGalleryName.push(filesName)
            }
            const product = await Product.create({name, url, price, oldPrice, subCategoryId, categoryId, desc, img: fileName, gallery: fileGalleryName}) 
            return res.json(product) 
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors })
            } else {
                res.json({ message: "Заполнены не все поля, или количество символов меньше 3 или больше 50" })
            }
        }
    }

    async delete(req, res) {
        const { id } = req.params

        //id для удаления фото
        const productImg = await Product.findOne(
            {
                where: {id},
            },
        )
        
        //удаление фотографии
        fs.remove(path.join(__dirname, '../static/' + productImg.img))

        //удаление галереи
        for(let i = 0; i < productImg.gallery.length; i++) {
            let photo = productImg.gallery[i]       
            fs.remove(path.join(__dirname, '../static/' + photo))
        }

        const product = await Product.destroy(
            {
                where: { id },
            },
        )
        return res.json(product)
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const { name, url, price, oldPrice, subCategoryId, categoryId, desc } = req.body
            const {file, gallery} = req.files

            //обновление одной картинки
            let fileName
            if (file !== undefined) {
                let fileType = "";
                if (file[0].mimetype == 'image/jpeg' || file[0].mimetype == 'image/jpg') {
                    fileType = "jpg"
                } else if (file[0].mimetype == 'image/png') {
                    fileType = "png"
                }
                fileName = uuid.v4() + "." + fileType
                fs.move(file[0].path, path.resolve(__dirname, '..', 'static', fileName))
            }

            //обновление нескольких картинок
            let fileGalleryName = []
            if (gallery !== undefined) {
                for(let i = 0; i < gallery.length; i++) {
                    let galleryType = "";
                    if(gallery[i].mimetype == 'image/jpeg' || gallery[i].mimetype == 'image/jpg') {
                        galleryType = "jpg"
                    } else if (gallery[i].mimetype == 'image/png') {
                        galleryType = "png"
                    }
                    let filesName = uuid.v4() + `.${galleryType}`
                    fs.move(gallery[i].path, path.resolve(__dirname, '..', 'static', filesName))
                    fileGalleryName.push(filesName)
                }
            }

            const product = await Product.update(
                {
                    name, url, price, oldPrice, subCategoryId, categoryId, desc, img: fileName, gallery: fileGalleryName
                },
                {
                    where: { id },
                }
            )
            return res.json(product)
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                res.json({ errors: err.errors })
            } else {
                res.json({ message: "Заполнены не все поля, или количество символов меньше 3 или больше 50" })
            }
        }
    }

    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne(
            {
                where: { id },
            },
        )
        return res.json(product)
    }

    async getAll(req, res) {
        const product = await Product.findAll()
        return res.json(product)
    }
}
module.exports = new ProductRouter()
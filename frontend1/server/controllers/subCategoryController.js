const uuid = require('uuid')
const path = require('path');
const fs = require('fs-extra')
const { SubCategory } = require('../models/models')
class SubCategoryRouter {
    async create(req, res) {
        try {
            const { name, url, categoryId } = req.body
            const { file } = req.files;
            let fileType = "";
            if (file[0].mimetype == 'image/jpeg' || file[0].mimetype == 'image/jpg') {
                fileType = "jpg"
            } else if (file[0].mimetype == 'image/png') {
                fileType = "png"
            }
            let fileName = uuid.v4() + "." + fileType
            fs.move(file[0].path, path.resolve(__dirname, '..', 'static', fileName))
            const subCategory = await SubCategory.create({ name, url, categoryId, img: fileName })
            return res.json(subCategory)
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

        const subCategoryImg = await SubCategory.findOne(
            {
                where: {id},
            },
        )
        fs.remove(path.join(__dirname, '../static/' + subCategoryImg.img))

        const subCategory = await SubCategory.destroy(
            {
                where: { id },
            },
        )
        return res.json(subCategory)
    }

    async getOne(req, res) {
        const { id } = req.params
        const subCategory = await SubCategory.findOne(
            {
                where: { id },
            },
        )
        return res.json(subCategory)
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const { name, url, categoryId } = req.body
            const { file } = req.files
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

            const subCategory = await SubCategory.update(
                {
                    name, url, categoryId, img: fileName
                },
                {
                    where: { id },
                }
            )
            return res.json(subCategory) 
        } catch (err) {
            res.json({ message: "Заполнены не все поля, или количество символов меньше 3 или больше 50" })
        }
    }

    async getAll(req, res) {
        const subCategory = await SubCategory.findAll()
        return res.json(subCategory)
    }
}
module.exports = new SubCategoryRouter()
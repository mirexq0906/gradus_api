const { Blog } = require('../models/models')
const uuid = require('uuid')
const path = require('path');
const fs = require('fs-extra')
class BlogRouter {

    async create(req, res) {
        try {
            const { name, url, categoryId, desc, detailed, views } = req.body
            const { file } = req.files;

            let fileType = "";
            if (file[0].mimetype == 'image/jpeg' || file[0].mimetype == 'image/jpg') {
                fileType = "jpg"
            } else if (file[0].mimetype == 'image/png') {
                fileType = "png"
            }
            let fileName = uuid.v4() + "." + fileType
            fs.move(file[0].path, path.resolve(__dirname, '..', 'static', fileName))

            const blog = await Blog.create({ name, url, categoryId, desc, detailed, views: 0, img: fileName })
            return res.json(blog)
        } catch (err) {
            res.json({ message: "Заполнены не все поля, или количество символов меньше 3 или больше 50" })
        }
    }

    async delete(req, res) {
        const { id } = req.params

        const blogImg = await Blog.findOne(
            {
                where: { id },
            },
        )
        fs.remove(path.join(__dirname, '../static/' + blogImg.img))

        const blog = await Blog.destroy(
            {
                where: { id },
            },
        )
        return res.json(blog)
    }

    async getAll(req, res) {
        const blog = await Blog.findAll()
        return res.json(blog)
    }

    async getOne(req, res) {
        const { id } = req.params
        const blog = await Blog.findOne(
            {
                where: { id },
            },
        )
        return res.json(blog)
    }

    async getOneBlog(req, res) {
        const { slug } = req.params
        const blog = await Blog.findOne(
            {
                where: { url: slug },
            },
        )
        return res.json(blog)
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const { name, url, categoryId, desc, detailed } = req.body
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

            const blog = await Blog.update(
                {
                    name, url, categoryId, desc, detailed, img: fileName
                },
                {
                    where: { id },
                }
            )
            return res.json(blog)
        } catch (err) {
            res.json({ message: "Заполнены не все поля, или количество символов меньше 3 или больше 50" })
        }
    }


    async updateViews(req, res) {
        try {
            const { id } = req.params
            const { views } = req.body

            const blog = await Blog.update(
                {
                    views
                },
                {
                    where: { id },
                }
            )
            return res.json(blog)
        } catch (err) {
            res.json({ message: "Ошибка в счётчике просмотров" });
        }
    }

}
module.exports = new BlogRouter()
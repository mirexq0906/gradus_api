const { Video } = require('../models/models')
const uuid = require('uuid')
const path = require('path');
const fs = require('fs-extra')  
class VideoRouter {
 
    async create(req, res) { 
        try {
            const {name, url, categoryId} = req.body 
            const { file } = req.files;

            let fileType = "";
            if (file[0].mimetype == 'image/jpeg' || file[0].mimetype == 'image/jpg') {
                fileType = "jpg"
            } else if (file[0].mimetype == 'image/png') {
                fileType = "png"
            }
            let fileName = uuid.v4() + "." + fileType
            fs.move(file[0].path, path.resolve(__dirname, '..', 'static', fileName))

            const video = await Video.create({name, url, categoryId, img: fileName}) 
            return res.json(video) 
        } catch (err) {
            res.json({ message: "Заполнены не все поля, или количество символов меньше 3 или больше 50" })
        }
    }

    async delete(req, res) {
        const {id} = req.params

        const videoImg = await Video.findOne(
            {
                where: {id},
            },
        )
        fs.remove(path.join(__dirname, '../static/' + videoImg.img))

        const video = await Video.destroy(
            {
                where: {id},
            },
        )
        return res.json(video)
    }

    async getAll(req, res) { 
        const video = await Video.findAll() 
        return res.json(video) 
    }

    async getOne(req, res) { 
        const {id} = req.params 
        const video = await Video.findOne( 
            { 
                where: {id}, 
            }, 
        ) 
        return res.json(video) 
    }

    async update(req, res) { 
        try {
            const {id} = req.params
            const {name, url, categoryId,} = req.body 

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

            const video = await Video.update( 
                { 
                    name, url, categoryId, img: fileName 
                }, 
                { 
                    where: {id}, 
                } 
            ) 
            return res.json(video) 
        } catch (err) {
            res.json({ message: "Заполнены не все поля, или количество символов меньше 3 или больше 50" })
        }
    }
}
module.exports = new VideoRouter()
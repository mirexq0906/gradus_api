const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, UserData } = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {

    async registration(req, res) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return res.json('Некорректный email или password')
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return res.json('Пользователь с таким email уже существует')
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hashPassword })
        const userData = await UserData.create({ userId: user.id, name: " ", phone: " ", adress: " ", date: " " })
        const token = generateJwt(user.id, user.email, user.role)
        return res.json("Вы успешно зарегистрировались")
    }

    async login(req, res) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.json('Пользователь не найден')
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return res.json('Неверный пароль')
        }

        const token = generateJwt(user.id, user.email, user.role)


        return res.json({ token })
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }
}

module.exports = new UserController()
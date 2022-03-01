const { User } = require("../../models")
const bcrypt = require("../../utils/bcrypt")
const uuid = require("uuid")

async function register(req, res) {
    try {
        console.log("=== Register User ====")
        const role = "user"
        const id = uuid.v4()
        let {
            email,
            name,
            password,
            photo,
            address
        } = req.body

        password = bcrypt.generate(password)
        const payload = {
            id,
            email,
            name,
            password
        }

        const newUser = await User.create(payload)
        res.status(200).json({
            data: newUser
        })


    } catch (error) {
        res.send(error)
    }
}

module.exports = { register }
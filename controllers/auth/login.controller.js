const { User } = require("../../models")
const bcrypt = require("../../utils/bcrypt")

class Login {
    static async login(req, res) {
        try {
            let {
                email,
                password
            } = req.body

            const payload = {
                id,
                email,
                name,
                password
            }
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Login
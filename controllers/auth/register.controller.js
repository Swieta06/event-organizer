const { User } = require("../../models")
const bcrypt = require("../../utils/bcrypt")
const uuid = require("uuid")
const response = require('../../utils/response');

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
        req.flash("success", "Register berhasil!");
        res.status(200).json(response("Success", newUser, null))

    } catch (error) {
        req.flash("error", "Internal server error");
        res.status(500).json(response('Internal server error', null, error));
    }
}

module.exports = register
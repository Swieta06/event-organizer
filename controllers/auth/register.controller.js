const { User } = require("../../models");
const bcrypt = require("../../utils/bcrypt");
const uuid = require("uuid");

async function register(req, res) {
    try {
        console.log("=== Register User ====");
        const id = uuid.v4();
        let {
            email,
            name,
            password,
            photo,
            address
        } = req.body;

        password = bcrypt.generate(password);
        const payload = {
            id,
            email,
            name,
            password
        };

        await User.create(payload);
        req.flash("success", "Register berhasil!");
        res.redirect("/");
        return;
    } catch (error) {
        next(error);
    }
}

module.exports = register;
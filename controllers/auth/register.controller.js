const { User } = require("../../models");
const bcrypt = require("../../utils/bcrypt");
const uuid = require("uuid");

async function register(req, res, next) {
    try {
        console.log("=== Register User ====");
        const id = uuid.v4();
        let {
            email,
            nama,
            password,
            photo,
            address
        } = req.body;

        password = bcrypt.generate(password);
        const payload = {
            id,
            email,
            name:nama,
            password
        };
console.log(payload)
       await User.create(payload);
        req.flash("success", "Register berhasil!");
        res.redirect("/");
        return;
    } catch (error) {
        console.log("error")
        next(error);
    }
}

module.exports = register;
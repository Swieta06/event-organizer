const { User } = require("../../models");
const createError = require("http-errors");
const response = require('../../utils/response');
const bcrypt = require('../../utils/bcrypt');

async function updateAdmin(req, res, next) {
    try {
        const { id } = req.params;
        if ((req.user?.id == id) && (req.user?.role == "admin")) {
            let {
                email,
                name,
                password,
                photo,
                address
            } = req.body;
    
            password = bcrypt.generate(password);
            const data = {
                email,
                name,
                password,
                photo,
                address
            };
            
            const update = await User.update(data, {
                where: {
                    id,
                },
                returning: true
            });
            res.status(200).json(response("Success", update));
        }
    } catch (error) {
        next(createError(error.status || 500, error.message));
    }
}

module.exports = updateAdmin;
const { User } = require("../../models");
const createError = require("http-errors");
const response = require('../../utils/response');
const bcrypt = require('../../utils/bcrypt');

async function updateAdmin(req, res, next) {
    try {
        const { id } = req.params;
        const checkId = await User.findOne({
            where: {
                id
            }
        });

        if(!checkId){
            res.status(400).json(response("Error", null, "Id tidak ditemukan"));
            return;
        }

        if ((req.user?.id == id)) {
            let {
                email,
                name,
                password,
                address
            } = req.body;
    
            password = bcrypt.generate(password);
            const data = {
                email,
                name,
                password,
                address
            };
            
            const update = await User.update(data, {
                where: {
                    id,
                },
                returning: true
            });
            res.status(200).json(response("Success", update));
        } else {
            res.status(401).json(response("Error", null, "Anda tidak memiliki akses untuk merubah data user ini"));
            return;
        }
    } catch (error) {
        next(createError(error.status || 500, error.message));
    }
}

module.exports = updateAdmin;
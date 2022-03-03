const { User } = require('../../models');
const createError = require("http-errors");
const response = require('../../utils/response');

async function getAllUsers(req, res, next) {
    try {
        const payload = await User.findAll();
        res.status(200).json(response("Success", payload));
    } catch (error) {
        next(createError(error.status || 500, error.message));
    }
}

module.exports = getAllUsers;
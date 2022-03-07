const response = require('../../utils/response');
const { Package } = require("../../models");

async function getAllPackages(req, res, next) {
    try {
        const payload = await Package.findAll();
        res.status(200).json(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = getAllPackages;
const response = require('../../utils/response');
const { Package, Order } = require("../../models");

async function getAllPackages(req, res, next) {
    try {
        const options = {
            include: [{
                model: Order
            }]
        }
        const payload = await Package.findAll(options);
        res.status(200).json(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = getAllPackages;
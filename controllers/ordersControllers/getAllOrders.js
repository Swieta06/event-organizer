const response = require('../../utils/response');
const { Order } = require("../../models");

async function getAllOrders(req, res, next) {
    try {
        const payload = await Order.findAll();
        res.status(200).json(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = getAllOrders;
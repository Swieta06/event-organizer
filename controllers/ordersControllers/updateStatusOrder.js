const response = require('../../utils/response');
const { Order } = require("../../models");

async function updateStatusOrder(req, res, next) {
    try {
        const { idOrder: idOrder } = req.params;
        const status = req.body.status;
    
        const updateStatusOrder = await Order.update({ status: status }, {
            where: {
                id: idOrder,
            },
            returning: true
        });

        res.status(200).send(response("success", updateStatusOrder))
    } catch (error) {
        next(error);
    }
}

module.exports = updateStatusOrder;
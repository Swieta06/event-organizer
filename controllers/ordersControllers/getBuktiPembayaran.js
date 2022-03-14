const response = require('../../utils/response');
const {
    Order,
    Payment
} = require("../../models");

async function getBuktiPembayaran(req, res, next) {
    try {
        const {
            idOrders: idOrders
        } = req.params;

        const options = {
            where: {
                OrderId: idOrders
            }
        }

        const payload = await Payment.findOne(options);
        if(payload){
            res.status(200).json(response("Success", payload));
        }else{
            res.status(400).json(response("Error", null, "Data tidak ditemukan!"));
        }
    } catch (error) {
        next(error);
    }
}

module.exports = getBuktiPembayaran;
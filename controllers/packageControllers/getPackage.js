const response = require('../../utils/response');
const { Package } = require("../../models");

async function getPackage(req, res, next) {
    try {
        const {
            id
        } = req.params;

        const options = {
            where: {
                id
            }
        }

        const payload = await Package.findOne(options);
        res.status(200).json(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = getPackage;
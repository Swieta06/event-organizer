const response = require('../../utils/response');
const { Package } = require("../../models");

async function deletePackage(req, res, next) {
    try {
        const {
            id
        } = req.params;

        const options = {
            where: {
                id
            },
            returning: true
        }

        const payload = await Package.destroy(options);
        res.status(200).json(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = deletePackage;
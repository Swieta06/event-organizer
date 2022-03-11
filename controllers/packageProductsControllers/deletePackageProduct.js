const response = require('../../utils/response');
const { PackageProducts } = require("../../models");

async function deletePackageProduct(req, res, next) {
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


        const deletePackage = await PackageProducts.destroy(options)
        res.status(200).send(response("Success", deletePackage));
    } catch (error) {
        next(error);
    }
}

module.exports = deletePackageProduct;
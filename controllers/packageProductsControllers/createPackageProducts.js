const response = require('../../utils/response');
const { PackageProducts } = require("../../models");

async function createPackageProducts(req, res, next) {
    try {
        let {PackageId, ProductId} = req.body
        const payload = {
            PackageId, ProductId
        }

        const newPackageProducts = await PackageProducts.create(payload)
        res.status(200).send(response("Success", newPackageProducts));
    } catch (error) {
        next(error);
    }
}

module.exports = createPackageProducts;
const response = require('../../utils/response');
const { PackageProducts, Package, Product } = require("../../models");

async function getAllPackageProducts(req, res, next) {
    try {
        const options = {
            include : [
                {
                    model: Product
                },
                {
                    model: Package
                }
            ]
        }
        const payload = await PackageProducts.findAll(options);
        res.status(200).json(response("Success", payload));
    } catch (error) {
        next(error);
    }
}

module.exports = getAllPackageProducts;
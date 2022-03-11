const response = require('../../utils/response');
const { PackageProducts } = require("../../models");

async function updatePackageProduct(req, res, next) {
    try {
        let {PackageId, ProductId} = req.body
        const payload = {
            PackageId, ProductId
        }
        const id = req.params.id
        const newPackageProducts = await PackageProducts.update(payload,{
              where : {
                id
            },
            returning : true
        })
        res.status(200).send(response("Success", newPackageProducts));
    } catch (error) {
        next(error);
    }
}

module.exports = updatePackageProduct;
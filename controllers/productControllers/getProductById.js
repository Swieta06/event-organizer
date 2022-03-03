const { Product } = require("../../models");
const response = require('../../utils/response');
const createError = require("http-errors");

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getByIdProduct = await Product.findOne({
      attributes: ["id","VendorId", "name", "description", "price", "CategoryId", "photo", "stock"],
      where: {
        id,
      },
    });

    if (getByIdProduct) {
        res.status(200).json(response('Success get product by id', getByIdProduct));
    } else {
       res.status(404).json(response('Not Found'));
    }
     
  } catch (error) {
      next(createError(error.status || 500, error.message));
  }
};

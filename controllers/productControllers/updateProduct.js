const { Product } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateProduct = {
      VendorId: req.body.VendorId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      CategoryId: req.body.CategoryId,
      photo: req.body.photo,
      stock: req.body.stock,
    };
    const replaceData = await Product.update(updateProduct, {
      where: {
        id,
      },
    });
    res.status(200).json(response("Product Updated", replaceData));
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

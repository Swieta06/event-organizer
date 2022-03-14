const { Product } = require("../../models");
const response = require('../../utils/response');
const createError = require("http-errors");

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDataProduct = await Product.destroy({
      where: {
        id,
      },
    });
  res.status(200).json(response('Success delete data product', deletedDataProduct));
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

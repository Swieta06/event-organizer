const { Product } = require("../../models");
const response = require('../../utils/response');
const createError = require("http-errors");

exports.getAllProduct = async (req, res, next) => {
  try {
      const getDataProduct = await Product.findAll({
      attributes: ["id","VendorId", "name", "description", "price", "CategoryId", "photo", "stock"],
    });
      if(getDataProduct){
          res.status(201).json(response('Success get data products', getDataProduct));
      }else {
          res.status(400).json({
               message : 'Bad request'
          })
      }
  } catch (error) {
       next(createError(error.status || 500, error.message));
  }
};

const { Product } = require("../../models");
const response = require('../../utils/response');
const createError = require("http-errors");

exports.createProduct = async (req, res) => {
  try {
   let {VendorId, name, description, price, CategoryId, photo, stock} = req.body;
   const dataProduct = { 
        VendorId : req.body.VendorId, 
        name : req.body.name, 
        description : req.body.description,
        price : req.body.price,
        CategoryId : req.body.CategoryId,
        photo : req.body.photo,
        stock : req.body.stock
    };
    const dataCreateProduct = await Product.create(dataProduct);
     res.status(201).json(response('Success create data product', dataCreateProduct));
  } catch (error) {
     next(createError(error.status || 500, error.message));
  }
};

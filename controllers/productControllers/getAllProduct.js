const { Product } = require("../../models");
const response = require('../../utils/response');

exports.getAllProduct = async (req, res) => {
  try {
    const getDataProduct = await Product.findAll();
    res.status(201).json(response('Success get data products' ,getDataProduct));
  } catch (error) {
   res.status(500).json(response('Internal server error', null, error));
  }
};

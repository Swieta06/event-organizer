const { getAllProduct } = require("./getAllProduct");
const { getProductById } = require("./getProductById");
const { createProduct } = require("./createProduct");
const { deleteProduct } = require("./deleteProduct");
const { updateProduct } = require("./updateProduct");

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};

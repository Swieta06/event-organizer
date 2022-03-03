const Auth = require("./auth");
const homeControllers = require("../controllers/homeControllers");
const ordersControlers = require("./ordersControllers");
const productController = require("./productControllers");

module.exports = {
  homeControllers,
  ordersControlers,
  productController,
  Auth,
};

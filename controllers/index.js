const Auth = require("./auth");
const homeControllers = require("../controllers/homeControllers");
const ordersControlers = require("./ordersControllers");
const productController = require("./productControllers");
const adminController = require('./adminControllers');
const packageControllers = require('./packageControllers');

module.exports = {
  homeControllers,
  ordersControlers,
  productController,
  adminController,
  Auth,
  packageControllers
};

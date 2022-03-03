const Auth = require("./auth")
const homeControllers = require("../controllers/homeControllers");
const userController = require("./user");
const ordersControlers = require("./ordersControllers");
const productController = require("./productControllers");
const adminController = require('./adminControllers');

module.exports = {
  homeControllers,
  userController,
  ordersControlers,
  productController,
  adminController,
  Auth
};

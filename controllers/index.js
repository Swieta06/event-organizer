<<<<<<< HEAD
const userController = require('./user');
module.exports = { userController };
=======
const Auth = require("./auth")
const homeControllers = require("../controllers/homeControllers");
const userController = require("./user");
const ordersControlers = require("./ordersControllers");
const productController = require("./productControllers");

module.exports = {
  homeControllers,
  userController,
  ordersControlers,
  productController,
  Auth
};
>>>>>>> dafaaccd93f73fa1be22f78e02baeb33f515206e

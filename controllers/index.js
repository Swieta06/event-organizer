const Auth = require("./auth")
const homeControllers = require("../controllers/homeControllers");
const userController = require("./user");
const ordersControlers = require("./ordersControllers");

module.exports = {
  homeControllers,
  userController,
  ordersControlers,
  Auth
};

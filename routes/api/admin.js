const route = require("express").Router();
const { adminController } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");

route.use(authentication, authenticationAdmin);

route.get("/users", adminController.getAllUsers);
route.delete("/:id", adminController.deleteAdmin);
route.put("/:id", adminController.updateAdmin);

module.exports = route;
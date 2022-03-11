const routes = require("express").Router()
const { packageProductsControllers } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");

routes.use(authentication);
routes.use(authenticationAdmin);

routes.get("/",packageProductsControllers.getAllPackageProducts)
routes.get("/:id", packageProductsControllers.getPackageProduct)
routes.post("/",packageProductsControllers.createPackageProduct)
routes.put("/:id", packageProductsControllers.updatePackageProduct)
routes.delete("/:id", packageProductsControllers.deletePackageProduct)

module.exports = routes
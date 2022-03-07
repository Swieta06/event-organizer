const router = require("express").Router();
const { productController } = require("../../controllers");

route.use(authentication, authenticationAdmin);

router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/vendors/:vendorId", productController.getByVendor);

module.exports = router;

const router = require("express").Router();
const { productController } = require("../../controllers");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
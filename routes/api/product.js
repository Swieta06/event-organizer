const router = require("express").Router();
const { productController } = require("../../controllers");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
// router.put("/:id", productController.updateProdcut);
// router.delete("/:id", productController.deleteProdcut);

module.exports = router;
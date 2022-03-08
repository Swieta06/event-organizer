const router = require("express").Router();
const { productController } = require("../../controllers");
const upload = require("../../middlewares/uploadImageProduct");

router.post("/", upload.single("photo"), productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/vendors/:vendorId", productController.getByVendor);

module.exports = router;

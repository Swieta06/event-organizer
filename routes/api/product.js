const router = require("express").Router();
const { productController } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");
const upload = require("../../middlewares/uploadImageProduct");

router.use(authentication);

router.get("/vendors/:vendorId", productController.getByVendor);

router.use(authenticationAdmin);

router.post("/", upload.single("photo"), productController.createProduct);
router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
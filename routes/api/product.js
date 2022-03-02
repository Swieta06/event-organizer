const router = require("express").Router();
const { productController } = require("../../controllers");

router.get("/vendors/:vendorId", productController.getByVendor);

module.exports = router;

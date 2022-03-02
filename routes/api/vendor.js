const express = require("express");
const router = express.Router();
const vendorController = require("../../controllers/vendor");

router.get("/", vendorController.getAllVendor);
router.post("/", vendorController.createVendor);
module.exports = router;

const express = require("express");
const { route } = require(".");
const router = express.Router();
const vendorController = require("../../controllers/vendorControllers");

router.get("/", vendorController.getAllVendor);
router.post("/", vendorController.createVendor);
router.get("/:id", vendorController.getVendorById);
router.put("/:id", vendorController.updateVendor);
router.delete("/:id", vendorController.deleteVendor);
module.exports = router;

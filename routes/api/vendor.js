const express = require("express");
const router = express.Router();
const vendorController = require("../../controllers/vendorControllers");

route.use(authentication, authenticationAdmin);

router.get("/", vendorController.getAllVendor);
router.post("/", vendorController.createVendor);
router.get("/:id", vendorController.getVendorById);
router.put("/:id", vendorController.updateVendor);
router.delete("/:id", vendorController.deleteVendor);
module.exports = router;

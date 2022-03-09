const express = require("express");
const router = express.Router();
const vendorController = require("../../controllers/vendorControllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");

router.use(authentication);
router.get("/", vendorController.getAllVendor);
router.use(authenticationAdmin);
router.post("/", vendorController.createVendor);
router.get("/:id", vendorController.getVendorById);
router.put("/:id", vendorController.updateVendor);
router.delete("/:id", vendorController.deleteVendor);
module.exports = router;

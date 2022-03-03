const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");
const upload = require("../../middlewares/uploadPayment");

/* GET Orders Page Step 1. */
router.get("/:namePackage", ordersControlers.getViews);

/* POST Order Payments */
router.post(
  "/:OrderId/payments",
  upload.single("photo"),
  ordersControlers.orderPayment
);
module.exports = router;

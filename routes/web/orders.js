const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");
const upload = require("../../middlewares/uploadPayment");

/* GET Orders Page Step 1. */
router.get("/step/1", ordersControlers.getViews);

/* GET Orders Page Step 2. */
router.get("/step/2", ordersControlers.getViewsStep2);

/* Update order after click next step on page step 3 to step 4 */
router.post("/:idOrder/edit", ordersControlers.updateOrder);

/* Get Views Step 4 */
router.get("/:OrderId", ordersControlers.getViewsStep4);

/* POST Order Payments */
router.post(
  "/:OrderId/payments",
  upload.single("photo"),
  ordersControlers.orderPayment
);
module.exports = router;

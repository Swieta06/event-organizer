const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");
const upload = require("../../middlewares/uploadPayment");

/* GET Orders Page Step 1. */
router.get("/", ordersControlers.getViews, ordersControlers.getViewsStep2);

/* GET Orders Page Step 3. */
router.get("/:idOrder/", ordersControlers.getViewsStep3);

/* Update order after click next step on page step 3 to step 4 */
router.post("/:idOrder/edit", ordersControlers.updateOrder);

/* POST Order Payments */
router.post(
  "/:OrderId/payments",
  upload.single("photo"),
  ordersControlers.orderPayment
);
module.exports = router;

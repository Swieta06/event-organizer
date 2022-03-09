const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");
const upload = require("../../middlewares/uploadPayment");
const getOrderController = require("../../controllers/ordersControllers/getOrder");
const authentication = require("../../middlewares/authentication");

/* GET Orders List Orders. */
router.get("/", authentication, ordersControlers.getOrder);

/* GET Orders Page Step 1. */
router.get("/step/1", ordersControlers.getViews);

/* GET Orders Page Step 2. */
router.get("/step/2", ordersControlers.getViewsStep2);

/* GET Orders Page Step 3. */
router.get("/:idOrder/step/3", ordersControlers.getViewsStep3);

/* Update order after click next step on page step 3 to step 4 */
router.post("/:idOrder/edit", ordersControlers.updateOrder);

/* Get Views Step 4 */
router.get("/:OrderId/payment", ordersControlers.getViewsStep4);

/* GET Views Detail Order */
router.get("/:idOrder", ordersControlers.orderDetail);

/* POST Order Payments */
router.post(
  "/:OrderId/payments",
  upload.single("photo"),
  ordersControlers.orderPayment
);

router.get("/payments/:idPayment/:filename", ordersControlers.getPhotoPayment);

module.exports = router;

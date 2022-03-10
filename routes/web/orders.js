const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");
const upload = require("../../middlewares/uploadPayment");
<<<<<<< HEAD
const getOrderController = require("../../controllers/ordersControllers/getOrder");
const authentication = require("../../middlewares/authentication");

/* GET Orders List Orders. */
router.get("/", authentication, ordersControlers.getOrder);
=======
const authentication = require("../../middlewares/authentication");

/* Middleware to check authentication */
router.use(authentication);

/* GET Orders List Orders. */
router.get("/", ordersControlers.getOrder);
>>>>>>> 05196e4b140387a8edc21ffce9b0846346a43c63

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
router.get("/:idOrder", authentication, ordersControlers.orderDetail);

/* POST Order Payments */
router.post(
  "/:OrderId/payment",
  upload.single("photo"),
  ordersControlers.orderPayment
);

router.get("/payments/:idPayment/:filename", ordersControlers.getPhotoPayment);

module.exports = router;

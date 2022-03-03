const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");

/* GET Orders Page Step 1. */
router.get("/:namePackage", ordersControlers.getViews);
router.get("", ordersControlers.getViewsStep2);

/* Update order after click next step on page step 3 to step 4 */
router.post("/:idOrder/edit", ordersControlers.updateOrder);

module.exports = router;

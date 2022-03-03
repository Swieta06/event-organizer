const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");

/* GET Orders Page Step 1. */
// router.get("/:namePackage", ordersControlers.getViews);
router.get("/step2", ordersControlers.getViewsStep2);
// router.get('', ordersControlers.getViewsStep2)

module.exports = router;

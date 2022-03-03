const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");

/* GET Orders Page Step 1. */
router.get("/:namePackage", ordersControlers.getViews);
router.get("", ordersControlers.getViewsStep2);

module.exports = router;

const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");

/* GET Orders Page Step 1. */
router.get("/:namePackage", ordersControlers.getViews);

module.exports = router;

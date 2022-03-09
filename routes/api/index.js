const express = require('express');
const router = express.Router();
const userRoute = require("./user");
const productRoute = require("./product");
const adminRoute = require("./admin");
const vendorRoute = require("./vendor");
const orderRoute = require("./order");
const pakcageRoute = require('./package');

router.use("/admin", adminRoute);
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/vendors", vendorRoute);
router.use("/orders", orderRoute);
router.use("/packages", pakcageRoute);

/* GET test api. */
router.get('/', function (req, res, next) {
  res.status(200).json({ test: 'test' });
});

module.exports = router;

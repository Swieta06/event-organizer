const express = require("express");
const router = express.Router();
const vendorRoute = require("./vendor");
const userRoute = require("./user");
const productRoute = require("./product");
const orderRoute = require("./order");

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/vendors", vendorRoute);
router.use("/orders", orderRoute);

/* GET test api. */
router.get("/", function (req, res, next) {
  res.status(200).json({ test: "test" });
});

module.exports = router;

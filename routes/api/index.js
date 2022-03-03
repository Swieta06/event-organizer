const express = require("express");
const router = express.Router();
const userRoute = require("./user");
const productRoute = require("./product");
const adminRoute = require("./admin");
const vendorRoute = require("./vendor");
const { Order } = require("../../models");

router.use("/admin", adminRoute);
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/vendors", vendorRoute);

/* GET test api. */
router.get("/test", async function (req, res, next) {
  res.status(200).json({ test: "test" });
});

module.exports = router;

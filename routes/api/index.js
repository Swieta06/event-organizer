const express = require("express");
const router = express.Router();
const userRoute = require("./user");
const vendorRoute = require("./vendor");

router.use("/users", userRoute);
router.use("/vendors", vendorRoute);
/* GET test api. */
router.get("/", function (req, res, next) {
  res.status(200).json({ test: "test" });
});

module.exports = router;

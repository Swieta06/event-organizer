const express = require("express");
const router = express.Router();
const userRoute = require("./userRoute");
const ordersRoute = require("./orders");
const mainRoute = require("./main");
const googleRoute = require("./google");
const resetPasswordRoute = require("./resetPassword");

/* Main page. */
router.use("/", mainRoute);

/* Register with Email */
router.use("/", userRoute);

/* Reset Password */
router.use("/", resetPasswordRoute);

/* Login Goole. */
router.use("/login/google", googleRoute);

router.get("/test", (req, res) => {
  res.render("pages/index");
});

router.use('/orders', ordersRoute);

module.exports = router;

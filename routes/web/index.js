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

router.get('/confirm-reset-password', (req, res) => {
  const token = req.query.t;
  res.render('pages/confirm-reset-password-test', { token });
});

router.get("/verification-sent", (req, res) => {
  res.render("pages/verification-sent");
});

router.get("/verification-success", (req, res) => {
  res.render("pages/verification-success");
});

router.get('/test', (req, res) => {
  res.render('pages/event');
});

router.use('/orders', ordersRoute);

module.exports = router;

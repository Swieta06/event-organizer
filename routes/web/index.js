const express = require("express");
const router = express.Router();
const passport = require("passport");
const { authentication } = require("../../middlewares");
const userRoute = require("./userRoute");
const { homeControllers } = require("../../controllers");
const ordersRoute = require("./orders");

/* Register with Email */
router.use("/", userRoute);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", { title: "Express" });
});

/* GET home page. */
router.get("/", homeControllers.getIndex);

/* Login Goole. */
router.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/login/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/",
    failureFlash: true,
    successFlash: "Successfully logged in!",
  })
);

router.get('/request-reset-password', (req, res) => {
  res.render('pages/request-reset-password-test');
});

router.get('/confirm-reset-password', (req, res) => {
  res.render('pages/confirm-reset-password-test');
});

router.use('/orders', ordersRoute);

module.exports = router;

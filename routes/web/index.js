const express = require('express');
const router = express.Router();
const passport = require("passport");
const { authentication } = require("../../middlewares");
const userRoute = require("./userRoute");
const ordersRoute = require("./orders");
const mainRoute = require('./main');

/* Main page. */
router.use("/", mainRoute);

/* Register with Email */
router.use("/", userRoute);

/* Login Goole. */
router.get(
  '/login/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/login/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/',
    failureFlash: true,
    successFlash: 'Successfully logged in!',
  })
);

router.get('/request-reset-password', (req, res) => {
  res.render('pages/request-reset-password-test');
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

const express = require("express");
const router = express.Router();
const passport = require("passport");
const { authentication } = require("../../middlewares");
const homeController = require("../../controllers/home");

/* GET home page. */
router.get("/", homeController.getIndex);

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

module.exports = router;

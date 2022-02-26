const express = require("express");
const router = express.Router();
const passport = require("passport");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", { title: "Express" });
});
//Login Google
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

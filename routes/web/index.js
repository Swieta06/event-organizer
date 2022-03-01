const express = require("express");
const router = express.Router();
const passport = require("passport");
const { authentication } = require("../../middlewares");
const userRoute = require("./userRoute")

/* Register with Email */
router.use("/", userRoute)

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", { title: "Express" });
});

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

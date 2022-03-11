const express = require("express");
const router = express.Router();

router.get("/request-reset-password", (req, res) => {
  res.render("pages/request-reset-password-test");
});

router.get("/confirm-reset-password", (req, res) => {
  const token = req.query.t;
  res.render("pages/confirm-reset-password-test", { token });
});

router.get("/verification-sent", (req, res) => {
  res.render("pages/verification-sent");
});

router.get("/verification-success", (req, res) => {
  res.render("pages/verification-success");
});

module.exports = router;

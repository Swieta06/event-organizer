const express = require("express");
const router = express.Router();

/* GET test api. */
router.get("/", function (req, res, next) {
  res.status(200).json({ test: "test" });
});

module.exports = router;

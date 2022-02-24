const express = require("express");
const router = express.Router();

const webRoute = require("./web");
const apiRoute = require("./api");

router.use("/", webRoute);
router.use("/api/v1", apiRoute);

module.exports = router;

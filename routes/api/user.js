const express = require("express");
const router = express.Router();
const { Auth } = require("../../controllers");

route.use(authentication, authenticationAdmin);

// route request reset password
router.post("/request-reset-password", Auth.requestResetPassword);

// route confirm reset password
router.post("/confirm-reset-password", Auth.confirmResetPassword);

module.exports = router;

const express = require('express');
const router = express.Router();
const { userController } = require('../../controllers/index');

// route request reset password
router.post('/request-reset-password', userController.requestResetPassword);

// route confirm reset password
router.post('/confirm-reset-password', userController.confirmResetPassword);

module.exports = router;

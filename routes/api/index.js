const express = require('express');
const router = express.Router();
const userRoute = require('./user');
const productRoute = require('./product');
const adminRoute = require("./admin");

router.use('/admin', adminRoute);
router.use('/users', userRoute);
router.use('/products', productRoute);

/* GET test api. */
router.get('/', function (req, res, next) {
  res.status(200).json({ test: 'test' });
});

module.exports = router;

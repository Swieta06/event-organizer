const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const userRoute = require("./user");
const vendorRoute = require("./vendor");
=======
const userRoute = require('./user');
const productRoute = require('./product');

router.use('/users', userRoute);
router.use('/products', productRoute);

>>>>>>> refs/remotes/origin/develop

router.use("/users", userRoute);
router.use("/vendors", vendorRoute);
/* GET test api. */
router.get("/", function (req, res, next) {
  res.status(200).json({ test: "test" });
});

module.exports = router;

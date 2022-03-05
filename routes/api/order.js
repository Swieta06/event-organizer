const router = require("express").Router();
const { ordersControlers } = require("../../controllers");
const authentication = require("../../middlewares/authentication");

router.post("/", authentication, ordersControlers.createOrder);

module.exports = router;

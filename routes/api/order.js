const router = require("express").Router();
const { ordersControlers } = require("../../controllers");
const authentication = require("../../middlewares/authentication");

router.post("/", authentication, ordersControlers.createOrder);
router.get("/:idOrder", ordersControlers.orderDetail);

module.exports = router;

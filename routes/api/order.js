const router = require("express").Router();
const { ordersControlers } = require("../../controllers");

router.post("/:idOrder/edit", ordersControlers.updateOrder);

module.exports = router;

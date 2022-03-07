const router = require("express").Router();
const { ordersControlers } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');

// router.use(authentication, authenticationAdmin);

router.post("/", ordersControlers.createOrder);

router.put("/:idOrder/status",
    body('status', 'Status order tidak sesuai!').isInt({ min: 0, max: 5}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()
            const status = error.status?.msg
            const data = {
                "status" : status
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    },
    ordersControlers.updateStatusOrder
);


module.exports = router;

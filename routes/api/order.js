const router = require("express").Router();
const { ordersControlers } = require("../../controllers");
const authentication = require("../../middlewares/authentication");
const authenticationAdmin = require("../../middlewares/authenticationAdmin");
const { body, validationResult } = require('express-validator');
const response = require('../../utils/response');

router.use(authentication);

router.post("/",
    body('package', 'Package tidak boleh kosong!').notEmpty(),
    body('totalParticipant', 'Total Paticipant tidak boleh kosong!').notEmpty(),
    body('totalPrice', 'Total Price tidak boleh kosong!').notEmpty(),
    body('eventAt', 'Event At tidak boleh kosong!').notEmpty(),
    body('concept', 'Concept tidak boleh kosong!').notEmpty(),
    body('desc', 'Description tidak boleh kosong!').notEmpty(),
    body('products').notEmpty().withMessage('Products tidak boleh kosong!')
        .isArray().withMessage('Products harus berupa array!'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.mapped()
            const package = error.package?.msg
            const totalParticipant = error.totalParticipant?.msg
            const totalPrice = error.totalPrice?.msg
            const eventAt = error.eventAt?.msg
            const concept = error.concept?.msg
            const desc = error.desc?.msg
            const products = error.products?.msg

            const data = {
                "package" : package,
                "totalParticipant" : totalParticipant,
                "totalPrice" : totalPrice,
                "eventAt" : eventAt,
                "concept" : concept,
                "desc" : desc,
                "products" : products
            }

            res.status(400).json(response("error", null, data));
            return;
        }
        next();
    },
    ordersControlers.createOrder);

router.use(authenticationAdmin);

router.get("/", ordersControlers.getAllOrders);
router.get("/:idOrders", ordersControlers.getBuktiPembayaran);

router.put("/:idOrder/status",
    body('status').notEmpty().withMessage('Status tidak boleh kosong!')
        .isInt({ min: 0, max: 5}).withMessage('Status order tidak sesuai!'),
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

router.post("/", authentication, ordersControlers.createOrder);

module.exports = router;

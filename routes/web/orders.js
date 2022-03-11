const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");
const upload = require("../../middlewares/uploadPayment");
<<<<<<< HEAD
const getOrderController = require("../../controllers/ordersControllers/getOrder");
const authentication = require("../../middlewares/authentication");

/* GET Orders List Orders. */
router.get("/", authentication, ordersControlers.getOrder);
=======
const authentication = require("../../middlewares/authentication");
const { body, validationResult } = require('express-validator');

/* Middleware to check authentication */
router.use(authentication);

/* GET Orders List Orders. */
router.get("/", ordersControlers.getOrder);
>>>>>>> 05196e4b140387a8edc21ffce9b0846346a43c63

/* GET Orders Page Step 1. */
router.get("/step/1", ordersControlers.getViews);

/* GET Orders Page Step 2. */
router.get("/step/2", ordersControlers.getViewsStep2);

/* GET Orders Page Step 3. */
router.get("/:idOrder/step/3", ordersControlers.getViewsStep3);

/* Update order after click next step on page step 3 to step 4 */
router.post("/:idOrder/edit",
  body('customerName', 'Customer Name tidak boleh kosong!').notEmpty(),
  body('companyName', 'Company Name tidak boleh kosong!').notEmpty(),
  body('tel', 'Telepon tidak boleh kosong!').notEmpty(),
  body('address', 'Address tidak boleh kosong!').notEmpty(),
  body('postalCode', 'Postal Code tidak boleh kosong!').notEmpty(),
  body('paymentMethodId', 'Payment Method tidak boleh kosong!').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = errors.mapped()
        const customerName = error.customerName?.msg
        const companyName = error.companyName?.msg
        const tel = error.tel?.msg
        const address = error.address?.msg

        const data = {
            "customerName" : customerName,
            "companyName" : companyName,
            "tel" : tel,
            "address" : address,
            "postalCode" : postalCode,
            "paymentMethodId" : paymentMethodId
        }

        req.flash("error", data);
        res.redirect("back");
        return;
    }
    next();
  },
  ordersControlers.updateOrder);

/* Get Views Step 4 */
router.get("/:OrderId/payment", ordersControlers.getViewsStep4);

/* GET Views Detail Order */
router.get("/:idOrder", authentication, ordersControlers.orderDetail);

/* POST Order Payments */
router.post("/:OrderId/payment",
  upload.single("photo"),
  body('bankName', 'Bank Name tidak boleh kosong!').notEmpty(),
  body('bankHolder', 'Bank Holder tidak boleh kosong!').notEmpty(),
  body('bankNumber', 'Bank Number tidak boleh kosong!').notEmpty(),
  body('price', 'Price tidak boleh kosong!').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = errors.mapped()
        const bankName = error.bankName?.msg
        const bankHolder = error.bankHolder?.msg
        const bankNumber = error.bankNumber?.msg
        const price = error.price?.msg

        const data = {
            "bankName" : bankName,
            "bankHolder" : bankHolder,
            "bankNumber" : bankNumber,
            "price" : price
        }

        req.flash("error", data);
        res.redirect("back");
        return;
    }
    next();
  },
  ordersControlers.orderPayment
);

router.get("/payments/:idPayment/:filename", ordersControlers.getPhotoPayment);

module.exports = router;

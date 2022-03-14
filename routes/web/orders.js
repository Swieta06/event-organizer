const express = require("express");
const router = express.Router();
const { ordersControlers } = require("../../controllers");
const upload = require("../../middlewares/uploadPayment");
const authentication = require("../../middlewares/authentication");
const { body, validationResult } = require("express-validator");
const multer = require("multer");
//Router For Payment Gateway Notification, Dont use Auth
router.post(
  "/payment/automatic/handling",
  ordersControlers.paymentGatewayHandling
);

/* Middleware to check authentication */
router.use(authentication);

/* GET Orders List Orders. */
router.get("/", ordersControlers.getOrder);

/* GET Orders Page Step 1. */
router.get("/step/1", ordersControlers.getViews);

/* GET Orders Page Step 2. */
router.get("/step/2", ordersControlers.getViewsStep2);

/* GET Orders Page Step 3. */
router.get("/:idOrder/step/3", ordersControlers.getViewsStep3);

/* Update order after click next step on page step 3 to step 4 */
router.post(
  "/:idOrder/edit",
  body("customerName")
    .notEmpty()
    .withMessage("Nama pengguna tidak boleh kosong!"),
  body("companyName")
    .notEmpty()
    .withMessage("Nama perusahaan tidak boleh kosong!"),
  body("tel").notEmpty().withMessage("Telepon tidak boleh kosong!"),
  body("address").notEmpty().withMessage("Alamat tidak boleh kosong!"),
  body("postalCode").notEmpty().withMessage("Kode pos tidak boleh kosong!"),
  body("paymentMethodId")
    .notEmpty()
    .withMessage("Metode pembayaran tidak boleh kosong!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = errors.mapped();
      const customerName = error.customerName?.msg;
      const companyName = error.companyName?.msg;
      const tel = error.tel?.msg;
      const address = error.address?.msg;

      const data = {
        customerName: customerName,
        companyName: companyName,
        tel: tel,
        address: address,
        postalCode: postalCode,
        paymentMethodId: paymentMethodId,
      };

      req.flash("error", data);
      res.redirect("back");
      return;
    }
    next();
  },
  ordersControlers.updateOrder
);

/* Get Views Step 4 */
router.get("/:OrderId/payment", ordersControlers.getViewsStep4);

/* GET Views Detail Order */
router.get("/:idOrder", authentication, ordersControlers.orderDetail);

/* POST Order Payments */
router.post(
  "/:OrderId/payment",
  (req, res, next) => {
    upload.single("photo")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log(err);
        if (err.code === "LIMIT_FILE_SIZE") {
          req.flash("error", { photo: "Ukuran file terlalu besar!" });
          return res.redirect("back");
        }
        req.flash("error", {
          photo: `Terjadi kesalahan pada saat upload file! error:${err.message}`,
        });
        return res.redirect("back");
      } else if (err) {
        // An unknown error occurred when uploading.
        console.log(err);
        next(err);
      }
      next();
    });
  },
  body("bankName").notEmpty().withMessage("Nama bank tidak boleh kosong!"),
  body("bankHolder")
    .notEmpty()
    .withMessage("Pemegang bank tidak boleh kosong!"),
  body("bankNumber")
    .notEmpty()
    .withMessage("Nomor rekening bank tidak boleh kosong!"),
  body("price")
    .notEmpty()
    .withMessage("Jumlah yang ditransfer tidak boleh kosong!")
    .isInt()
    .withMessage("Harga harus berupa angka!"),
  (req, res, next) => {
    console.log(req.body);
    console.log("masuk sini");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = errors.mapped();
      const bankName = error.bankName?.msg;
      const bankHolder = error.bankHolder?.msg;
      const bankNumber = error.bankNumber?.msg;
      const price = error.price?.msg;

      const data = {
        bankName: bankName,
        bankHolder: bankHolder,
        bankNumber: bankNumber,
        price: price,
      };

      req.flash("error", data);
      res.redirect("back");
      return;
    }
    next();
  },
  ordersControlers.orderPayment
);
//Payment Gateway Route
router.post("/payment/automatic", ordersControlers.paymentGateway);
router.get("/payment/automatic", (req, res) => {
  const { order_id } = req.query;
  res.redirect(`/orders/${order_id}/payment`);
});
router.post(
  "/payment/automatic/update",
  ordersControlers.paymentAutomaticHandling
);

router.get("/payments/:idPayment/:filename", ordersControlers.getPhotoPayment);

module.exports = router;

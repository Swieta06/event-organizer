const express = require("express");
const router = express.Router();
const userRoute = require("./user");
const productRoute = require("./product");
const adminRoute = require("./admin");
const vendorRoute = require("./vendor");
const { Order } = require("../../models");

router.use("/admin", adminRoute);
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/vendors", vendorRoute);

/* GET test api. */
router.get("/test", async function (req, res, next) {
  const order = await Order.create({
    UserId: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
    PackageId: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
    PaymentMethodId: 1,
    customerName: "John Doe",
    companyName: "John Doe",
    tel: "0912345678",
    address: "123 Fake Street",
    postalCode: "12345",
    status: 0,
    totalPrice: 0,
    totalParticipant: 0,
    desc: "",
    concept: "indoor",
    eventAt: new Date(),
  });
  res.status(200).json({ test: "test" });
});

module.exports = router;

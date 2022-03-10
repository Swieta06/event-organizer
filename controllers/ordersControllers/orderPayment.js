const { Payment, Order } = require("../../models");
const createError = require("http-errors");
const response = require("../../utils/response");
const uuid = require("uuid");

const paymentOrder = async (req, res, next) => {
  try {
    const OrderId = req.params.OrderId;
    const { bankName, bankHolder, bankNumber, price } = req.body;
    const id = uuid.v4();
 
    let photo;
    if (typeof req.file !== "undefined") {
      photo = await req.file.filename;
    } else {
      const error = {
        "image" : "Image Not Found"
      }
      req.flash("error",error);
      return res.redirect("back");
    }
    const payload = {
      id,
      OrderId,
      photo,
      bankHolder,
      bankNumber,
      bankName,
      price: parseInt(price),
    };

    const newPayment = await Payment.create(payload);
    if (newPayment)
      await Order.update(
        { status: 2 },
        {
          where: {
            id: OrderId,
          },
        }
      );
    res.redirect("/orders");
  } catch (error) {
  console.log(error);
    if (error.status < 500) {
      req.flash("error", { message: error.message });
      return res.status(error.status).redirect("back");
    }
    next(error);
  }
};

module.exports = paymentOrder;

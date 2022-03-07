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
      req.flash("error",error);
      return res.redirect("back");
      // res.status(400).json(response("Image Not Found", 200));
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
    res.redirect("/");
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = paymentOrder;

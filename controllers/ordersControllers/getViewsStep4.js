const { Order, PaymentMethod } = require("../../models");
const createError = require("http-errors");

const getViewsStep4 = async (req, res, next) => {
  try {
    const { step } = req.query;
    if (step != "4") {
      throw createError(404, "Page Not Found");
    }
    const { OrderId } = req.params;
    const data = await Order.findOne({
      where: {
        id: OrderId,
      },
      include: [
        {
          model: PaymentMethod,
        },
      ],
    });
    if (data)
      res.render("pages/orderStep4", {
        order: OrderId,
        totalPrice: data.totalPrice,
        paymentMethod: {
          id: data.PaymentMethod.id,
          bankBranch: data.PaymentMethod.bankBranch,
          bankName: data.PaymentMethod.bankName,
          bankHolder: data.PaymentMethod.bankHolder,
          bankNumber: data.PaymentMethod.bankNumber,
        },
      });
    else throw createError(400, "Order Not Found");
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = getViewsStep4;

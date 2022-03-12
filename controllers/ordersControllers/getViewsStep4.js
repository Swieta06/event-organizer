const { Order, PaymentMethod } = require("../../models");
const createError = require("http-errors");

const getViewsStep4 = async (req, res, next) => {
  try {
    const { step } = req.query;
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

    // if (data.status >= 3) {
    //   res.redirect(`/orders/${data.id}`);
    //   return;
    // }

    if (data) {
      const result = {
        order: OrderId,
        totalPrice: data.totalPrice,
        orderedAt: data.orderedAt,
        expiredAt: data.expiredAt,
        paymentMethod: {
          id: data.PaymentMethod.id,
          bankBranch: data.PaymentMethod.bankBranch,
          bankName: data.PaymentMethod.bankName,
          bankHolder: data.PaymentMethod.bankHolder,
          bankNumber: data.PaymentMethod.bankNumber,
        },
      };
      if (
        data.PaymentMethod.id == 6 ||
        data.PaymentMethod.bankHolder == "Midtrans"
      )
        res.render("pages/orderStep4-automatic", result);
      else res.render("pages/orderStep4", result);
    } else throw createError(400, "Order Not Found");
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = getViewsStep4;

const { Order, PaymentMethod } = require("../../models");
const createError = require("http-errors");
const response = require("../../utils/response");

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
    if (data)
      res.status(200).json({
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
    else res.status(400).json(response("Order Not Found"));
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = getViewsStep4;

const { Order, PaymentMethod, MidtransPayment } = require("../../models");
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
        // {
        //   model: MidtransPayment,
        //   attributes: [
        //     "pdf_url",
        //     "va_number",
        //     "bankName",
        //     "amount",
        //     "payment_type",
        //     "transaction_status",
        //   ],
        // },
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
      if (data.PaymentMethod.bankHolder == "Midtrans") {
        const payment = await MidtransPayment.findOne({
          where: {
            OrderId,
          },
          attributes: [
            "pdf_url",
            "va_number",
            "bankName",
            "amount",
            "payment_type",
            "transaction_status",
          ],
        });
        result.payment = payment;
        console.log(result);
        res.render("pages/orderStep4-automatic", result);
      } else res.render("pages/orderStep4", result);
    } else throw createError(400, "Order Not Found");
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = getViewsStep4;

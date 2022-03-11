const { Order } = require("../../models");
const { PaymentMethod } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

exports.updateOrder = async (req, res, next) => {
  try {
    if (!req.body) {
      throw createError(400, "body not defined");
    }
    const { idOrder: orderId } = req.params;
    if (!orderId) {
      throw createError(400, "orderId not defined");
    }
    const {
      customerName,
      companyName,
      tel,
      address,
      postalCode,
      paymentMethodId,
    } = req.body;

    if (
      !customerName ||
      !companyName ||
      !tel ||
      !address ||
      !postalCode ||
      !paymentMethodId
    ) {
      throw createError(400, "some field is required");
    }

    const user = res.locals.user;
    if (user == null) {
      throw createError(401, "User not authenticated");
    }

    const order = await Order.findAll({
      where: { id: orderId },
      raw: true,
    });

    if (!order[0]) {
      throw createError(404, "Order not found");
    }

    if (order[0].UserId != user.id) {
      throw createError(403, "User not authorized");
    }

    const paymentMethod = await PaymentMethod.findAll({
      where: {
        id: parseInt(paymentMethodId),
      },
      raw: true,
    });

    if (!paymentMethod[0]) {
      throw createError(404, "Payment method not found");
    }

    const updateOrder = {
      customerName,
      companyName,
      tel,
      address,
      postalCode,
      status: 1,
      PaymentMethodId: paymentMethodId,
      orderedAt: new Date(),
    };

    const updatedOrder = await Order.update(updateOrder, {
      where: {
        id: orderId,
      },
    });

    if (updatedOrder[0] == 0) {
      throw createError(500, "Error while updating order");
    }

    // res.status(200).json(response("Order Updated", "test"));
    res.redirect(`/orders/${orderId}/payment`);
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

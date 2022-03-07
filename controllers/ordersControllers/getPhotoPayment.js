const { Payment, Order } = require("../../models");
const response = require("../../utils/response");
path = require("path");

exports.getPhotoPayment = async (req, res) => {
  try {
    const { idPayment, filename } = req.params;
    if (req.isAuthenticated()) {
      const user = req.user;

      const payment = await Payment.findOne({
        where: {
          id: idPayment,
        },
        include: [
          {
            model: Order,
            attributes: ["id", "UserId"],
          },
        ],
      });

      if (!payment) {
        return res.status(404).json({
          message: "Payment not found",
        });
      }

      if (
        (user.role === "customer" && payment.Order.UserId === user.id) ||
        user.role === "admin"
      ) {
        const url = `/storage/app/payments/${filename}`;
        res.sendFile(path.join(__dirname, `../..${url}`));
      } else {
        return res
          .status(401)
          .json(response("Error", null, "User Unauthorized"));
      }
    } else {
      return res
        .status(401)
        .json(response("Error", null, "User Unauthenticated"));
    }
  } catch (error) {
    return res
      .status(500)
      .json(response("Error", null, "Internal Server Error"));
  }
};

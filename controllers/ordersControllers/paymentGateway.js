const { User, Order, MidtransPayment } = require("../../models");
const midtransClient = require("midtrans-client");
const createError = require("http-errors");
require("dotenv").config();

const payOrder = async (req, res) => {
  const { order_id } = req.query;
  if (order_id) {
    res.redirect(`/orders/${order_id}/payment`);
  } else {
    const { OrderId } = req.body;
    const order = await Order.findOne({
      where: {
        id: OrderId,
      },
      include: [
        {
          model: User,
          attributes: ["name", "email"],
        },
        {
          model: MidtransPayment,
        },
      ],
    });

    if (order.MidtransPayment) {
      let transactionToken = order.MidtransPayment.token;
      res.status(200).json({
        transactionToken: transactionToken,
      });
    } else {
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER,
      });

      let parameter = {
        transaction_details: {
          order_id: order.id,
          gross_amount: order.totalPrice,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: order.User.name,
          email: order.User.email,
        },
      };

      snap.createTransaction(parameter).then(async (transaction) => {
        // transaction token
        let transactionToken = transaction.token;
        await MidtransPayment.create({
          OrderId: OrderId,
          token: transactionToken,
        });

        res.status(200).json({
          transactionToken: transactionToken,
        });
      });
    }
  }
};

module.exports = payOrder;

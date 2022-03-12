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

    let bankName = order.dataValues.MidtransPayment.dataValues.bankName;

    if (order.MidtransPayment.token) {
      let transactionToken = order.MidtransPayment.token;
      res.status(200).json({
        transactionToken: transactionToken,
        typeBank: bankName.toLowerCase() + "_va",
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
          first_name: order.customerName,
          phone: order.tel,
          email: order.User.email,
        },
      };

      snap.createTransaction(parameter).then(async (transaction) => {
        // transaction token
        let transactionToken = transaction.token;

        await MidtransPayment.update(
          {
            token: transactionToken,
            amount: order.totalPrice,
          },
          {
            where: {
              OrderId,
            },
          }
        );

        res.status(200).json({
          transactionToken: transactionToken,
          typeBank: bankName.toLowerCase() + "_va",
        });
      });
    }
  }
};

module.exports = payOrder;

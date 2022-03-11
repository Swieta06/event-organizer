const { User, Order, MidtransPayment } = require("../../models");
const createError = require("http-errors");

async function paymentHandling(req, res) {
  const {
    order_id,
    transaction_status,
    payment_type,
    gross_amount,
    signature_key,
    transaction_id,
    transaction_time,
    settlement_time,
  } = req.body;

  const payload = {
    transaction_status,
    payment_type,
    amount: gross_amount,
    signature_key,
    transaction_id,
    transaction_time,
    settlement_time,
  };

  const midtransUpdated = await MidtransPayment.update(payload, {
    where: {
      OrderId: order_id,
    },
  });
  let statusOrder = 1;
  if (transaction_status == "settlement" || transaction_status == "capture") {
    statusOrder = 3;
  }

  const updateStatusOrder = await Order.update(
    { status: statusOrder },
    {
      where: {
        id: order_id,
      },
    }
  );
  res.sendStatus(200);
}

module.exports = paymentHandling;

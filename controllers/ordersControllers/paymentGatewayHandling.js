const { User, Order, MidtransPayment } = require("../../models");
const createError = require("http-errors");

async function paymentHandling(req, res) {
  let {
    order_id,
    transaction_status,
    transaction_id,
    transaction_time,
    settlement_time,
    va_numbers,
  } = req.body;
  let va_number;
  if (va_numbers) {
    va_number = va_numbers.va_number;
  }
  let statusOrder = 1;
  if (transaction_status == "settlement" || transaction_status == "capture") {
    statusOrder = 3;
    transaction_status = "Berhasil";
  }
  const payload = {
    transaction_status,
    transaction_id,
    transaction_time,
    settlement_time,
    va_number,
  };

  const midtransUpdated = await MidtransPayment.update(payload, {
    where: {
      OrderId: order_id,
    },
  });

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

const { User, Order, MidtransPayment } = require("../../models");
const createError = require("http-errors");

async function paymentHandling(req, res) {
  let {
    order_id,
    transaction_status,
    transaction_id,
    settlement_time,
    va_numbers,
    permata_va_number,
    gross_amount,
  } = req.body;
  let va_number;
  if (va_numbers) {
    va_number = va_numbers[0].va_number;
  } else if (permata_va_number) {
    va_number = permata_va_number;
  }
  let statusOrder = 1;
  if (transaction_status == "settlement" || transaction_status == "capture") {
    statusOrder = 3;
    transaction_status = "Berhasil";
  } else if (transaction_status == "cancel" || transaction_status == "expire") {
    statusOrder = 5;
    transaction_status = "Dibatalkan";
  } else {
    transaction_status = "Pending";
  }
  const payload = {
    transaction_status,
    transaction_id,
    transaction_time: settlement_time,
    va_number,
    amount: gross_amount.substring(0, gross_amount.length - 3),
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

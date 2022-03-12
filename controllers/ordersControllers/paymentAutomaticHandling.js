const { User, Order, MidtransPayment } = require("../../models");
const createError = require("http-errors");

async function paymentHandling(req, res) {
  const { OrderId, va_number, pdf_url, transaction_status } = req.body;

  const payload = {
    va_number,
    pdf_url,
    transaction_status,
  };

  const midtransUpdated = await MidtransPayment.update(payload, {
    where: {
      OrderId,
    },
  });
  console.log(midtransUpdated);
  let statusOrder = 1;
  if (transaction_status == "settlement" || transaction_status == "capture") {
    statusOrder = 3;
  }

  const updateStatusOrder = await Order.update(
    { status: statusOrder },
    {
      where: {
        id: OrderId,
      },
    }
  );
  res.sendStatus(200);
}

module.exports = paymentHandling;

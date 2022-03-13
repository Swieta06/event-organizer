const { User, Order, MidtransPayment } = require("../../models");
const createError = require("http-errors");

async function paymentHandling(req, res) {
  const { OrderId, pdf_url } = req.body;

  const payload = {
    pdf_url,
  };

  const midtransUpdated = await MidtransPayment.update(payload, {
    where: {
      OrderId,
    },
  });

  res.sendStatus(200);
}

module.exports = paymentHandling;

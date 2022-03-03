const { getViews } = require("./getViews");
const { getViewsStep2 } = require("./getViewsStep2");
const { updateOrder } = require('./updateOrder');
const orderPayment = require("./orderPayment");
module.exports = {
  getViews,
  getViewsStep2,
  orderPayment,
  updateOrder,
};

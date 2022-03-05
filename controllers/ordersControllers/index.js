const { getViews } = require("./getViews");
const { getViewsStep2 } = require("./getViewsStep2");
const { getViewsStep3 } = require("./getViewsStep3");
const { updateOrder } = require("./updateOrder");
const orderPayment = require("./orderPayment");
module.exports = {
  getViews,
  getViewsStep2,
  getViewsStep3,
  orderPayment,
  updateOrder,
};

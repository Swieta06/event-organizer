const { getViews } = require("./getViews");
const { getViewsStep2 } = require("./getViewsStep2");
const { updateOrder } = require("./updateOrder");
const orderPayment = require("./orderPayment");
const { createOrder } = require("./createOrder");
const getViewsStep4 = require("./getViewsStep4");

module.exports = {
  getViews,
  getViewsStep2,
  orderPayment,
  updateOrder,
  getViewsStep4,
  createOrder,
};

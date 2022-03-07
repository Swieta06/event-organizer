const { getViews } = require("./getViews");
const { getViewsStep2 } = require("./getViewsStep2");
const { getViewsStep3 } = require("./getViewsStep3");
const { updateOrder } = require("./updateOrder");
const orderPayment = require("./orderPayment");
const { createOrder } = require("./createOrder");
const getViewsStep4 = require("./getViewsStep4");
const { getPhotoPayment } = require("./getPhotoPayment");
const { orderDetail } = require("./orderDetail");

module.exports = {
  getViews,
  getViewsStep2,
  getViewsStep3,
  orderPayment,
  updateOrder,
  getViewsStep4,
  createOrder,
  getPhotoPayment,
  orderDetail,
};

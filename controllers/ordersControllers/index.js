const { getViews } = require("./getViews");
const { getViewsStep2 } = require("./getViewsStep2");
const { getViewsStep3 } = require("./getViewsStep3");
const { updateOrder } = require("./updateOrder");
const orderPayment = require("./orderPayment");
const { createOrder } = require("./createOrder");
const getViewsStep4 = require("./getViewsStep4");
const updateStatusOrder = require("./updateStatusOrder");
const getAllOrders = require("./getAllOrders");
const getBuktiPembayaran = require("./getBuktiPembayaran");
const { getPhotoPayment } = require("./getPhotoPayment");
const { orderDetail } = require("./orderDetail");
const { getOrder } = require("./getOrder");
const paymentGateway = require("./paymentGateway");
const paymentGatewayHandling = require("./paymentGatewayHandling");
const paymentAutomaticHandling = require("./paymentAutomaticHandling");

module.exports = {
  getViews,
  getViewsStep2,
  getViewsStep3,
  orderPayment,
  updateOrder,
  getViewsStep4,
  createOrder,
  updateStatusOrder,
  getAllOrders,
  getBuktiPembayaran,
  getPhotoPayment,
  orderDetail,
  getOrder,
  paymentGateway,
  paymentGatewayHandling,
  paymentAutomaticHandling,
};

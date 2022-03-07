const { getViews } = require("./getViews");
const { getViewsStep2 } = require("./getViewsStep2");
const { getViewsStep3 } = require("./getViewsStep3");
const { updateOrder } = require("./updateOrder");
const orderPayment = require("./orderPayment");
const { createOrder } = require("./createOrder");
const getViewsStep4 = require("./getViewsStep4");
const updateStatusOrder = require('./updateStatusOrder');
const getAllOrders = require('./getAllOrders');
const getBuktiPembayaran = require('./getBuktiPembayaran')

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
  getBuktiPembayaran
};

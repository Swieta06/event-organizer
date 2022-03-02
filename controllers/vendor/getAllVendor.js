const { Vendor } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

const getAllVendors = async (req, res, next) => {
  try {
    const vendors = await Vendor.findAll();
    res.status(200).json(response("success", vendors, null));
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports = getAllVendors;

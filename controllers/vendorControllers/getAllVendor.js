const { Vendor } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

const getAllVendors = async (req, res, next) => {
  try {
    const vendors = await Vendor.findAll();
    if (vendors)
      res.status(200).json(response("success get All Vendor", vendors, null));
    else res.status(200).json(response("Vendor Not Found", vendors, null));
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports = getAllVendors;

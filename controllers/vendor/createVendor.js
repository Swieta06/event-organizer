const { Vendor } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

const getAllVendors = async (req, res, next) => {
  const { name, province, city, phone } = req.body;
  const payload = {
    id: "SSS",
    name,
    province,
    city,
    phone,
  };
  try {
    const newVendor = await Vendor.create(payload);
    res.status(200).json(response("success", newVendor, null));
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports = getAllVendors;

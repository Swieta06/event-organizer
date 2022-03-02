const { Vendor } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

const createVendor = async (req, res, next) => {
  try {
    const { name, province, city, phone } = req.body;
    const payload = {
      name,
      province,
      city,
      phone,
    };

    const newVendor = await Vendor.create(payload);
    res.status(200).json(response("success create vendor", newVendor, null));
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = createVendor;

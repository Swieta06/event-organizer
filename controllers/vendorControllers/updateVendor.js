const { Vendor } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

const updateVendor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, province, city, phone } = req.body;
    const payload = {
      name,
      province,
      city,
      phone,
    };

    const updatedVendor = await Vendor.update(payload, {
      where: {
        id,
      },
      returning: true,
    });

    res
      .status(200)
      .json(response("success updated vendor", updatedVendor, null));
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = updateVendor;

const { Vendor } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

const getVendorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findOne({
      where: {
        id,
      },
    });

    if (vendor) {
      res.status(200).json(response("Success get vendor by id", vendor));
    } else {
      res.status(200).json(response("Not Found"));
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = getVendorById;

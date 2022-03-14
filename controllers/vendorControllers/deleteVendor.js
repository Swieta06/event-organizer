const { Vendor } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");

const deleteVendor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Vendor.destroy({
      where: {
        id,
      },
      returning: true,
    });

    if (deleted) {
      res.status(200).json(response("Success Delete Vendor", deleted));
    } else {
      res.status(200).json(response("Vendor Not Found"));
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

module.exports = deleteVendor;

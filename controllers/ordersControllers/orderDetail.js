const {
  Product,
  Order,
  Package,
  Category,
  Payment,
  Vendor,
} = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");
const { Op } = require("@sequelize/core");
const { getByVendor } = require("../productControllers");

exports.orderDetail = async (req, res, next) => {
  try {
    const { idOrder } = req.params;
    const orderDetail = await Order.findOne({
      where: {
        id: idOrder,
      },
      attributes: [
        "id",
        "totalParticipant",
        "totalPrice",
        "status",
        "desc",
        "desc",
        "eventAt",
        "customerName",
        "companyName",
        "tel",
        "address",
        "postalCode",
      ],
      include: [
        {
          model: Package,
          as: "Package",
          attributes: [
            "id",
            "name",
            "minParticipant",
            "maxSnack",
            "additionCost",
            "price",
          ],
        },
        {
          model: Product,
          attributes: ["id", "name"],
          as: "products",
          through: {
            attributes: ["qty"],
          },
          include: [
            {
              model: Vendor,
              as: "vendor",
              attributes: ["name"],
            },
          ],
        },
        {
          model: Payment,
          attributes: [
            "id",
            "bankName",
            "bankHolder",
            "bankNumber",
            "price",
            "photo",
          ],
        },
      ],
    });

    if (orderDetail) {
      res.status(200).json(orderDetail);
    } else {
      res.status(404).json(response("Not Found"));
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

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
    let orderDetail = await Order.findOne({
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
            as: "products",
          attributes: ["id", "name"],
          include: [
            {
              model: Vendor,
              as: "vendor",
              attributes: ["name"],
            },
          ],
          through: {
            attributes: ["qty"],
          },
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

    console.log(orderDetail.dataValues.products[0].vendor.name, "<<<<<<");

    const orderDetails = orderDetail.dataValues.products.map((el) => {
      const productDetail = {};
      productDetail.id = el.id;
      productDetail.name = el.name;
      productDetail.vendor = el.vendor.name;
      productDetail.qty = el.OrderProduct.qty;

      return productDetail;
    });
    // orderDetail.dataValues.products = orderDetails;

    console.log(orderDetail, "<<<< Ini Order Detail");

    if (orderDetail) {
      res.status(200).json(orderDetail);
    } else {
      res.status(404).json(response("Not Found"));
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

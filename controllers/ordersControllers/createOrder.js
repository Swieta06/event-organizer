const {
  Order,
  Package,
  OrderProduct,
  Product,
  Category,
} = require("../../models");
const { Op } = require("sequelize");
const response = require("../../utils/response");
const createError = require("http-errors");

exports.createOrder = async (req, res, next) => {
  try {
    const {
      package,
      totalParticipant,
      totalPrice,
      eventAt,
      concept,
      desc,
      products,
    } = req.body;

    const { id: userId } = req.user;

    if (products?.length === 0 || !products) {
      throw createError(400, "No products added");
    }

    const findProduct = await Product.findAll({
      where: {
        id: {
          [Op.in]: products.map((product) => product.id),
        },
      },
      include: {
        model: Category,
        as: "category",
      },
    });

    const editedProducts = products.map((product) => {
      let qty = product.qty;
      const foundProduct = findProduct.find((p) => p.id === product.id);
      if (foundProduct) {
        switch (foundProduct.category?.name?.toLowerCase()) {
          case "makanan":
          case "snack":
            qty = totalParticipant;
            break;
          case "themes":
          case "talent":
            qty = 1;
            break;
          case "kipas":
          case "kursi":
          case "meja":
          default:
            qty = product.qty;
            break;
        }
      }
      return {
        ProductId: product.id,
        qty: qty,
      };
    });

    const selectedPackage = await Package.findOne({
      attributes: ["id"],
      where: { [Op.or]: [{ name: package }, { slug: package }] },
    });

    if (!selectedPackage) {
      throw createError(400, "Package not found");
    }

    const order = await Order.create(
      {
        UserId: userId,
        totalParticipant: totalParticipant,
        totalPrice: totalPrice,
        eventAt: eventAt,
        concept: concept,
        desc: desc,
        concept: concept,
        PackageId: selectedPackage.id,
        OrderProducts: editedProducts,
      },
      {
        include: [OrderProduct],
      }
    );
    const result = {
      id: order.id,
      totalParticipant: order.totalParticipant,
      totalPrice: order.totalPrice,
      eventAt: order.eventAt,
      concept: order.concept,
      desc: order.desc,
      status: order.status,
      package: selectedPackage.name,
      updatedAt: order.updatedAt,
      createdAt: order.createdAt,
      redirectUrl: `/orders/${order.id}/step/3`,
    };
    res.status(201).json(response("success", result));
  } catch (error) {
    next(error);
  }
};

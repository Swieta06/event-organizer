const {
  Order,
  Package,
  Product,
  Category,
  PaymentMethod,
} = require("../../models");
const createError = require("http-errors");
const { Op } = require("@sequelize/core");

exports.getViewsStep3 = async (req, res, next) => {
  try {
    const { step } = req.query;
    const { idOrder } = req.params;
    if (step == 3) {
      const user = res.locals.user;
      if (user == null) {
        throw createError(401, "User not authenticated");
      }

      const orderDetail = await Order.findAll({
        where: {
          id: idOrder,
        },
        attributes: ["id", "totalPrice", "UserId"],
        include: [
          {
            model: Package,
            as: "Package",
            attributes: ["id", "name", "price"],
          },
          {
            model: Product,
            attributes: ["id", "name", "price"],
            as: "products",
            through: { attributes: ["qty"] },
            include: [
              {
                model: Category,
                as: "category",
                attributes: [],
                where: {
                  id: {
                    [Op.notIn]: [1, 2, 10],
                  },
                },
              },
            ],
          },
        ],
      });

      if (!orderDetail[0]) {
        throw createError(404, "Order not found");
      }

      console.log(orderDetail[0].UserId, user.id);
      if (orderDetail[0].UserId != user.id) {
        throw createError(403, "User not authorized");
      }
      delete orderDetail[0].dataValues.UserId;

      orderDetail[0].dataValues.package = orderDetail[0].dataValues.Package;
      delete orderDetail[0].dataValues.Package;
      const length = orderDetail[0].dataValues.products.length;
      console.log(length);
      for (let i = 0; i < length; i++) {
        const qty =
          orderDetail[0].dataValues.products[i].dataValues.OrderProduct
            .dataValues.qty;
        orderDetail[0].dataValues.products[i].dataValues.qty = qty;
        delete orderDetail[0].dataValues.products[i].dataValues.OrderProduct;
      }

      const paymentMethods = await PaymentMethod.findAll({
        raw: true,
        attributes: ["id", "bankName"],
      });

      res.render("pages/orderStep3", {
        order: orderDetail[0].dataValues,
        PaymentMethods: paymentMethods,
      });
      // res.status(200).json({
      //   message: "test",
      //   data: {
      //     order: orderDetail[0].dataValues,
      //     PaymentMethods: paymentMethods,
      //   },
      // });
      return;
    }
    next();
  } catch (error) {
    console.log(error);
    next(createError(error.status || 500, error.message));
  }
};

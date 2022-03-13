const {
  Product,
  Order,
  Package,
  Category,
  Payment,
  MidtransPayment,
  Vendor,
  OrderProduct,
} = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");
const { Op } = require("@sequelize/core");

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
        "eventAt",
        "customerName",
        "companyName",
        "tel",
        "address",
        "postalCode",
        "concept",
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
            "detailPrice",
          ],
        },
        {
          model: Product,
          as: "products",
          through: {
            attributes: ["qty"],
          },

          attributes: ["id", "name", "CategoryId", "price"],
          include: [
            {
              model: Category,
              as: "category",
              attributes: ["id", "name"],
            },
            {
              model: Vendor,
              as: "vendor",
              attributes: ["name", "city"],
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
        {
          model: MidtransPayment,
        },
      ],
    });
    // const orderDetails = orderDetail.dataValues.products.map((el) => {
    //   const productDetail = {};
    //   productDetail.category = el.category.name;
    //   productDetail.id = el.id;
    //   productDetail.name = el.name;
    //   productDetail.vendor = el.vendor.name;
    //   productDetail.qty = el.OrderProduct.qty;

    //   if (!productDetail[el.category.name]) {
    //     productDetail[el.category.name] = [];
    //   }
    //   productDetail[el.category.name].push(productDetail);
    //   // console.log(el.products.CategoryId, "ini id apa?");
    //   console.log(el.category.id, "ini id Category");
    //   return productDetail;
    // });
    // delete orderDetail.dataValues.products;
    // orderDetail.dataValues.Products = orderDetails;

    let products = {};

    orderDetail.products.forEach((el) => {
      if (!products[el.category.name]) {
        products[el.category.name] = [];
      }
      products[el.category.name].push({
        id: el.id,
        name: el.name,
        vendor: el.vendor.name,
        location: el.vendor.city,
        price: el.price,
        qty: el.OrderProduct.qty,
      });
    });

    orderDetail.dataValues.products = products;
    orderDetail.products = products;
    console.log(orderDetail, "Ini Datavalues");
    if (orderDetail) {
      if (orderDetail.MidtransPayment) {
        res.render("pages/detailOrder-otomatis", { orderDetail });
      } else {
        res.render("pages/detailOrder", { orderDetail });
      }
    } else {
      res.status(404).json(response("Not Found"));
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

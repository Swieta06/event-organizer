const { Vendor, Package, Product, Category } = require("../../models");
const createError = require("http-errors");

exports.getViewsStep2 = async (req, res, next) => {
  try {
    let { step, namePackage, location } = req.query;
    toString(location);

    if (step != 2) {
      res.json(location);
    } else {
      const attribute = [
        "id",
        "name",
        "photo",
        "description",
        "price",
        "stock",
      ];
      const talent = await Product.findAll({
        attributes: attribute,
        where: {
          CategoryId: 6,
        },
      });

      const kipas = await Vendor.findAll({
        attributes: ["city"],
        where: {
          city: location,
        },
        include: {
          model: Product,
          as: "products",
          attributes: attribute,
          where: {
            CategoryId: 2,
          },
        },
      });

      //   const kursi = await Product.findAll({
      //     attributes: attribute,
      //     where: {
      //       CategoryId: 4,
      //       //   city: location,
      //     },
      //   });

      //   const meja = await Product.findAll({
      //     attributes: attribute,
      //     where: {
      //       CategoryId: 5,
      //       //   city: location,
      //     },
      //   });

      //   const tenda = await Product.findAll({
      //     attributes: attribute,
      //     where: {
      //       CategoryId: 7,
      //       //   city: location,
      //     },
      //   });
      res.status(200).json({
        // talents: talent,
        kipas: kipas,
        // kursis: kursi,
        // mejas: meja,
        // tendas: tenda,
      });
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

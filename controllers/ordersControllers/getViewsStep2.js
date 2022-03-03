const { Vendor, Package, Product, Category } = require("../../models");
const createError = require("http-errors");

exports.getViewsStep2 = async (req, res, next) => {
  try {
    const { step, namePackage, location } = req.query;

    if (step === 1 || step === "" || step === undefined || step === null) {
      const attribute = [
        "id",
        "name",
        "photo",
        "description",
        "price",
        "stock",
      ];
      const excluded = [
        "id",
        "name",
        "province",
        "city",
        "phone",
        "createdAt",
        "updatedAt",
      ];

      //   Get data Talent
      const talent = await Product.findAll({
        attributes: attribute,
        where: {
          CategoryId: 6,
        },
      });

      // Get data kipas by location
      const kipas = await Vendor.findAll({
        attributes: {
          exclude: excluded,
        },
        where: {
          city: location,
        },
        include: {
          model: Product,
          as: "products",
          attributes: attribute,
          where: {
            CategoryId: 3,
          },
        },
      });

      // Get data kursi by location
      const kursi = await Vendor.findAll({
        attributes: {
          exclude: excluded,
        },
        where: {
          city: location,
        },
        include: {
          model: Product,
          as: "products",
          attributes: attribute,
          where: {
            CategoryId: 4,
          },
        },
      });

      // Get data meja by location
      const meja = await Vendor.findAll({
        attributes: {
          exclude: excluded,
        },
        where: {
          city: location,
        },
        include: {
          model: Product,
          as: "products",
          attributes: attribute,
          where: {
            CategoryId: 5,
          },
        },
      });

      // Get data tenda by location
      const tenda = await Vendor.findAll({
        attributes: {
          exclude: excluded,
        },
        where: {
          city: location,
        },
        include: {
          model: Product,
          as: "products",
          attributes: attribute,
          where: {
            CategoryId: 7,
          },
        },
      });
      res.render("pages/orderStep2", {
        talent,
        kipas,
        kursi,
        meja,
        tenda,
      });
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

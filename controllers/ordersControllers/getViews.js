const { Vendor, Package, Product, Category } = require("../../models");
const createError = require("http-errors");

exports.getViews = async function (req, res, next) {
  try {
    const { step, namePackage } = req.params;
    if (step === 1 || step === "" || step === undefined || step === null) {
      let location = await Vendor.findAll({
        attributes: ["city"],
      });
      location = location.map((element) => {
        return element.city;
      });
      const packages = await Package.findOne({
        attributes: [
          "id",
          "name",
          "minParticipant",
          "additionCost",
          "price",
          "maxSnack",
        ],
        where: { slug: namePackage },
      });
      const category = await Category.findOne({
        attributes: ["id", "name"],
        where: { name: "themes" },
      });
      const themes = await category.getProducts({
        attributes: ["id", "name", "photo"],
      });
      res.render("pages/orderStep1", { location, packages, themes });
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

exports.getViewsStep2 = async (req, res) => {
  try {
    const { step, namePackage, location } = req.params;

    if (step != 2) {
      throw createError(error.status || 500, error.message);
    } else {
      const talent = await Product.findAll({
        attributes: ["id", "name", "photo", "descrtiption", "price", "stock"],
        where: {
          CategoryId: 6,
        },
      });

      const kipas = await Product.findAll({
        attributes: ["id", "name", "photo", "descrtiption", "price", "stock"],
        include: {
          model: Vendor,
          attributes: ["city"],
        },
        where: {
          CategoryId: 3,
          city: location,
        },
      });

      const kursi = await Product.findAll({
        attributes: ["id", "name", "photo", "descrtiption", "price", "stock"],
        include: {
          model: Vendor,
          attributes: ["city"],
        },
        where: {
          CategoryId: 4,
          city: location,
        },
      });

      const meja = await Product.findAll({
        attributes: ["id", "name", "photo", "descrtiption", "price", "stock"],
        include: {
          model: Vendor,
          attributes: ["city"],
        },
        where: {
          CategoryId: 5,
          city: location,
        },
      });

      const tenda = await Product.findAll({
        attributes: ["id", "name", "photo", "descrtiption", "price", "stock"],
        include: {
          model: Vendor,
          attributes: ["city"],
        },
        where: {
          CategoryId: 7,
          city: location,
        },
      });
      res.status(200).json(
        response("Success get data products", {
          talent,
          kipas,
          kursi,
          meja,
          tenda,
        })
      );
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

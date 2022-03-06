const { Vendor, Package, Product, Category } = require("../../models");
const { fn, col } = require("sequelize");
const createError = require("http-errors");

exports.getViews = async function (req, res, next) {
  try {
    const { package: packageName } = req.query;
    let location = await Vendor.findAll({
      attributes: [[fn("count", col("city")), "countCity"], "city"],
      group: ["city"],
    });
    location = location.map((element) => {
      return element.city;
    });
    const packages = await Package.findAll({
      attributes: [
        "id",
        "name",
        "slug",
        "minParticipant",
        "additionCost",
        "price",
        "maxSnack",
      ],
    });
    packages.forEach((element) => {
      element.selected =
        element.name === packageName || element.slug === packageName;
      element.dataValues.selected =
        element.name === packageName || element.slug === packageName;
    });
    const category = await Category.findOne({
      attributes: ["id", "name"],
      where: { name: "themes" },
    });
    const themes = await category.getProducts({
      attributes: ["id", "name", "photo"],
    });
    res.render("pages/orderStep1", { location, packages, themes });
    return;
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

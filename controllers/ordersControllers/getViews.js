const { Vendor, Package, Product, Category } = require("../../models");
const createError = require("http-errors");

exports.getViews = async function (req, res, next) {
  try {
    const { step, package: packageName } = req.query;
    if (step === "1" || step === undefined || step === null) {
      let location = await Vendor.findAll({
        attributes: ["city"],
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
    }
    next();
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

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
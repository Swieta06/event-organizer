const { Package } = require("../../models");

exports.getIndex = async (req, res) => {
  try {
    const getPackage = await Package.findAll({
      attributes: ["id", "name", "price", "features"],
    });
    res.render("pages/index", { packages: getPackage, title: "Express" });
  } catch (error) {
    console.log(error);
  }
};

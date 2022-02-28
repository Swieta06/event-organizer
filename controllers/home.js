const { Package } = require("../models");

exports.getIndex = async (req, res) => {
  try {
    const getPackage = await Package.findAll({
      attributes: ["id", "name", "price", "features"],
    });
    res.render("pages/index", { data: getPackage });
  } catch (error) {
    console.log(error);
  }
};

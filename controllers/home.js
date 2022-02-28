const { Package } = require("../models");

exports.getIndex = async (req, res) => {
  try {
    const getAllPackage = await Package.findAll();
    res.render("pages/index", { data: getAllPackage });
  } catch (error) {
    console.log(error);
  }
};

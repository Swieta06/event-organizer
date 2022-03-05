const { Vendor, Package, Product, Category } = require("../../models");
const { Op } = require("sequelize");
const createError = require("http-errors");

exports.getViewsStep2 = async (req, res, next) => {
  try {
    const { location } = req.query;
    let filter = null;
    if (!location && location?.length === 0) {
      filter = null;
    } else {
      const locate = location?.toLowerCase();
      filter = {
        [Op.or]: [{ city: locate || "" }, { name: "EO Planner" }],
      };
    }

    const attribute = ["id", "name", "photo", "description", "price", "stock"];

    const product = await Product.findAll({
      attributes: attribute,
      include: [
        {
          model: Vendor,
          as: "vendor",
          attributes: ["id", "city"],
          where: filter,
        },
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });
    const result = {};
    product.forEach((item) => {
      if (!result[item.category.name]) {
        result[item.category.name] = [];
      }
      result[item.category.name].push({
        id: item.id,
        name: item.name,
        price: item.price,
        stock: item.stock,
        photo: item.photo,
        description: item.description,
      });
    });

    res.render("pages/orderStep2", {
      talent: result.talent || [],
      kipas: result.kipas || [],
      kursi: result.kursi || [],
      meja: result.meja || [],
      tenda: result.tenda || [],
    });
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

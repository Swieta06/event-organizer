const { Product, Category } = require("../../models");
const { Op } = require("sequelize");
const response = require("../../utils/response");
const createError = require("http-errors");

exports.getByVendor = async (req, res, next) => {
  try {
    let { filter } = req.query;
    const { vendorId } = req.params;

    // Change the filter to array
    filter = !Array.isArray(filter) ? [filter] : filter;
    if (filter.find((item) => item === "makanan")) {
      filter = [...filter, "snack"];
    }

    let category = await Category.findAll({
      where: {
        name: filter,
      },
    });
    category = category.map((item) => item.id);

    if (category.length === 0) {
      throw createError(404, "Category not found");
    }

    const products = await Product.findAll({
      attributes: ["id", "name", "photo", "description" /*"price", "stock"*/],
      where: {
        VendorId: vendorId,
        CategoryId: {
          [Op.in]: [...category],
        },
      },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });

    if (products.length === 0) {
      throw createError(404, "Product with this vendor and category not found");
    }

    const result = {};
    filter.forEach((element) => {
      result[element] = products
        .filter((item) => item.category.name === element)
        .map((item) => ({
          id: item.id,
          name: item.name,
          photo: item.photo,
          description: item.description,
          // price: item.price,
          // stock: item.stock,
          // category: item.category.name,
        }));
      if (result[element].length === 0) {
        delete result[element];
      }
    });

    res.status(200).json(response("success", result, null));
  } catch (error) {
    next(error);
  }
};

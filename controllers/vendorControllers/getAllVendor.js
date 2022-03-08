const { Vendor, Product, Category } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");
const sequelize = require("sequelize");

const getAllVendors = async (req, res, next) => {
  try {
    const { location } = req.query;

    if (location) {
      let vendor = await Vendor.findAll({
        where: sequelize.where(
          sequelize.fn("lower", sequelize.col("city")),
          location.toLowerCase()
        ),

        include: [
          {
            model: Product,
            as: "products",
            include: [
              {
                model: Category,
                as: "category",
              },
            ],
          },
        ],
      });

      if (vendor.length == 0) {
        res.status(200).json(response("Vendor Not Found"));
        return;
      }

      vendor = vendor.filter((el) => {
        for (const item of el.products) {
          if (item.category.name == "snack" || item.category.name == "makanan")
            return true;
        }
        return false;
      });

      let vendors = vendor.map((el) => {
        return {
          id: el.id,
          name: el.name,
        };
      });

      let products = { makanan: [], snack: [] };

      if (vendor[0].products)
        vendor[0].products.forEach((el) => {
          var item = {
            id: el.id,
            name: el.name,
            desc: el.description,
            photo: el.photo,
          };
          if (el.category.name == "makanan") products.makanan.push(item);
          else if (el.category.name == "snack") products.snack.push(item);
          else return;
        });

      const result = {
        vendors,
        products,
      };

      res
        .status(200)
        .json(response("success get All Vendor by Location", result));
    } else {
      const vendors = await Vendor.findAll();
      if (vendors.length > 0)
        res.status(200).json(response("success get All Vendor", vendors));
      else res.status(200).json(response("Vendor Not Found"));
    }
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports = getAllVendors;

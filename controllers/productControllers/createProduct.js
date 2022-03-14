const { Product } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

exports.createProduct = async (req, res, next) => {
  try {
    let { VendorId, name, description, price, CategoryId, stock } = req.body;

    //Resize Image
    const { filename: imageName } = req.file;
    await sharp(req.file.path)
      .resize(200)
      .jpeg({ quality: 90 })
      .toFile(path.resolve("public/images/products", imageName));
    //delete temp (original image)
    fs.unlinkSync(req.file.path);

    const dataProduct = {
      VendorId,
      name,
      description,
      price: parseInt(price),
      CategoryId: parseInt(CategoryId),
      photo: imageName,
      stock,
    };
    const dataCreateProduct = await Product.create(dataProduct);
    res
      .status(201)
      .json(response("Success create data product", dataCreateProduct));
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

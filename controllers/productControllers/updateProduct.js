const { Product } = require("../../models");
const response = require("../../utils/response");
const createError = require("http-errors");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { VendorId, name, description, price, CategoryId, stock } = req.body;

    const oldData = await Product.findOne({
      where: {
        id,
      },
      attributes: ["id", "name", "photo"],
    });
    if (req.file) {
      //Get New Name if body.name not null
      var { filename: imageName } = req.file;
      if (!name) {
        imageName =
          oldData.name + "_" + Date.now() + path.extname(req.file.originalname);
      }
      //Resize Image
      await sharp(req.file.path)
        .resize(200)
        .jpeg({ quality: 90 })
        .toFile(path.resolve("public/images/products", imageName));
      //delete temp (original image)
      fs.unlinkSync(req.file.path);
      // Delete Old Photo
      const oldPath = "public/images/products/";
      if (fs.existsSync(oldPath + oldData.photo))
        fs.unlinkSync(oldPath + oldData.photo);
    }

    const updateProduct = {
      VendorId,
      name,
      description,
      price: price ? parseInt(price) : price,
      CategoryId: CategoryId ? parseInt(CategoryId) : CategoryId,
      photo: imageName ? imageName : undefined,
      stock,
    };

    if (oldData) {
      const replaceData = await Product.update(updateProduct, {
        where: {
          id,
        },
        returning: true,
      });
      res.status(200).json(response("Product Updated", replaceData));
    } else {
      res.status(404).json(response("Error", null, "Product Not Found"));
    }
  } catch (error) {
    next(createError(error.status || 500, error.message));
  }
};

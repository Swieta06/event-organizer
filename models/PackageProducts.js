"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PackageProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PackageProducts.belongsTo(models.Package);
      PackageProducts.belongsTo(models.Product);
    }
  }
  PackageProducts.init(
    {
      PackageId: DataTypes.UUID,
      ProductId: DataTypes.UUID
    },
    {
      sequelize,
      modelName: "PackageProducts",
    }
  );
  return PackageProducts;
};

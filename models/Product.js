'use strict';
const {
  Model
} = require('sequelize');
const uuid = require("uuid").v4;
const checkValidUrl = require("../utils/checkValidUrl");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Vendor, {
        foreignKey:'VendorId',
        as:'vendor'
      });
      Product.belongsTo(models.Category, {
        foreignKey:'CategoryId',
        as:'category'
      });
      Product.belongsToMany(models.Order, { through: models.OrderProduct, foreignKey: "ProductId" });
      Product.belongsToMany(models.Package, { through: "PackageProducts", foreignKey: "ProductId" });
      Product.hasMany(models.OrderProduct);
    }
  }
  Product.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: true,
        defaultValue: uuid,
    },
    VendorId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    photo: {
      type: DataTypes.TEXT,
      get() {
        const result = this.getDataValue("photo");
        return result ? checkValidUrl(result) ? result : `/images/products/${result}` :  "";
      },
    },
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

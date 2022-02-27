'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.vendor, {
        foreignKey:'IdVendor',
        as:'vendor'
      });
      Product.belongsTo(models.category, {
        foreignKey:'IdCategory',
        as:'category'
      });
    }
  }
  Product.init({
    IdVendor: DataTypes.INTEGER,
    IdUnits: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    IdCategory: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
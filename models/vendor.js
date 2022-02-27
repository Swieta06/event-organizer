'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.product,{
        foreignKey:'IdVendor',
        as:'products'
      })
    }
  }
  Vendor.init({
    name: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};
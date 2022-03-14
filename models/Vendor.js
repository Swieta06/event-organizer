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
      Vendor.hasMany(models.Product,{
        foreignKey:'VendorId',
        as:'products'
      });
    }
  }
  Vendor.init(
    {
      name: DataTypes.STRING,
      province: {
        type: DataTypes.STRING,
        set(val) {
          this.setDataValue("province", val.toLowerCase());
        },
        get() {
          return this.getDataValue("province").toLowerCase();
        },
      },
      city: {
        type: DataTypes.STRING,
        set(val) {
          this.setDataValue("city", val.toLowerCase());
        },
        get() {
          return this.getDataValue("city").toLowerCase();
        },
      },
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Vendor",
    }
  );
  return Vendor;
};
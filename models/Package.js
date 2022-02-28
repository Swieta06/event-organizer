"use strict";
const { set } = require("dottie");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Package.hasMany(models.Order);
    }
  }
  Package.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minParticipant: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      additionCost: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      maxSnack: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      features: {
        type: DataTypes.TEXT,
        get() {
          return this.getDataValue("features").split(",");
        },
        set(value) {
          this.setDataValue("features", value.join(","));
        },
      },
    },
    {
      sequelize,
      modelName: "Package",
    }
  );
  return Package;
};

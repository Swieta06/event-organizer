"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Theme.hasMany(models.Order);
    }
  }
  Theme.init(
    {
      name: DataTypes.STRING,
      photo: DataTypes.TEXT,
      type: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};

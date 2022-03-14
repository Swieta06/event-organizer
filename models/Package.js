"use strict";
const { set } = require("dottie");
const { Model } = require("sequelize");
const SequelizeSlugify = require("sequelize-slugify");
const uuid = require("uuid").v4;
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Package.hasMany(models.Order);
      Package.belongsToMany(models.Product, {
        through: models.PackageProducts,
        foreignKey: "PackageId",
        as: "products",
      });
    }
  }
  Package.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        unique: true,
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
          return this.getDataValue("features").split(";");
        },
        set(value) {
          this.setDataValue("features", value.join(";"));
        },
        minOrderTime: {
          type: DataTypes.INTEGER,
          defaultValue: 7,
        },
      },
      detailPrice: {
        type: DataTypes.TEXT,
        get() {
          return JSON.parse(this.getDataValue("detailPrice"));
        },
        set(value) {
          this.setDataValue("detailPrice", JSON.stringify(value));
        },
        minOrderTime: {
          type: DataTypes.INTEGER,
          defaultValue: 7,
        },
      },
    },
    {
      sequelize,
      modelName: "Package",
    }
  );

  SequelizeSlugify.slugifyModel(Package, { source: ["name"] });
  return Package;
};

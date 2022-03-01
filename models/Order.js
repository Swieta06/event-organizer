"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid").v4;

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsTo(models.Package);
      Order.belongsTo(models.Theme);
      Order.hasOne(models.Payment);
      Order.belongsToMany(models.Product, {
        through: models.OrderProduct,
        foreignKey: "OrderId",
        as: "products",
      });
      Order.hasMany(models.OrderProduct);
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: true,
        defaultValue: uuid,
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      totalParticipant: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      desc: DataTypes.TEXT,
      eventAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};

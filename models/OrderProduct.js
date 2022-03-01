"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderProduct.belongsTo(models.Order);
      OrderProduct.belongsTo(models.Product);
    }
  }
  OrderProduct.init(
    {
      OrderId: DataTypes.UUID,
      ProductId: DataTypes.UUID,
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderProduct",
    }
  );
  return OrderProduct;
};

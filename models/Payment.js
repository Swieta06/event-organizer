"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid").v4;
const checkValidUrl = require("../utils/checkValidUrl");

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Order);
    }
  }
  Payment.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: true,
        defaultValue: uuid,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      bankName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankHolder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: (payment) => {
          if (checkValidUrl(payment.photo)) {
            return payment;
          }
          payment.photo = `/orders/payments/${payment.id}/${payment.photo}`;
        },
      },
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};

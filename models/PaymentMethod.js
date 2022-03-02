"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PaymentMethod.hasOne(models.Payment);
    }
  }
  PaymentMethod.init(
    {
      bankBranch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankHolder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PaymentMethod",
    }
  );
  return PaymentMethod;
};

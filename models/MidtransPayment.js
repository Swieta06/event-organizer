"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MidtransPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MidtransPayment.belongsTo(models.Order);
    }
  }
  MidtransPayment.init(
    {
      token: DataTypes.STRING,
      transaction_id: DataTypes.STRING,
      transaction_status: DataTypes.STRING,
      payment_type: DataTypes.STRING,
      va_number: DataTypes.STRING,
      bankName: DataTypes.STRING,
      amount: DataTypes.STRING,
      pdf_url: DataTypes.STRING,
      transaction_time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MidtransPayment",
    }
  );
  return MidtransPayment;
};

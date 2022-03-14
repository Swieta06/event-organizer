'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid').v4;
module.exports = (sequelize, DataTypes) => {
  class ResetPasswordToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResetPasswordToken.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuid,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiredAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ResetPasswordToken',
    }
  );
  return ResetPasswordToken;
};

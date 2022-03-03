"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid").v4;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: true,
        defaultValue: uuid,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "customer"],
        defaultValue: "customer",
      },
      photo: DataTypes.STRING,
      address: DataTypes.TEXT,
    },
    {
      hooks: {
        beforeCreate: function (user) {
          if (!user.photo) {
            let getName = user.name;
            getName = encodeURIComponent(getName.trim());
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );
            const urlAvatar = `https://ui-avatars.com/api/?name=${getName}&background=${randomColor}&color=fff&size=64`;
            user.photo = urlAvatar;
          }
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

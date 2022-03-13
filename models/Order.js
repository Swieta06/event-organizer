"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid").v4;
const randomString = require("../utils/randomString");

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
      Order.hasOne(models.Payment);
      Order.hasOne(models.MidtransPayment);
      Order.belongsTo(models.PaymentMethod);
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
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: true,
      },
      customerName: {
        type: DataTypes.STRING,
      },
      companyName: {
        type: DataTypes.STRING,
      },
      tel: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
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
      concept: {
        type: DataTypes.ENUM,
        values: ["indoor", "outdoor"],
      },
      eventAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      orderedAt: {
        type: DataTypes.DATE,
      },
      expiredAt: {
        type: DataTypes.VIRTUAL,
        get() {
          return new Date(this.orderedAt).setDate(
            this.orderedAt?.getDate() + 7
          );
        },
        set(value) {
          throw new Error("Do not try to set the `expiredAt` value!");
        },
      },
    },
    {
      hooks: {
        beforeCreate: async function (order, options) {
          const pack = await order.getPackage();
          const date = order.createdAt
            .toLocaleDateString("id-ID", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .split("/")
            .join("");
          const time = order.createdAt
            .toLocaleTimeString("id-ID")
            .split(".")
            .join("");
          const idOrders = await Order.findAll({
            attributes: ["id"],
          });
          idOrders.map((idOrder) => idOrder.id);
          const packName = pack.slug;
          let orderId = "";
          do {
            const random = randomString(4, "aA#");
            orderId = `${packName.substring(0, 4)}${date}${time}${random}`;
          } while (idOrders.includes(orderId));
          order.id = orderId;
        },
      },
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};

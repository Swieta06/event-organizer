"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Payments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      OrderId: {
        type: Sequelize.UUID,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        allowNull: false,
      },
      PaymentMethodId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PaymentMethods",
          key: "id",
        },
        onUpdate: "CASCADE",
        allowNull: false,
      },
      photo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      bankName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankHolder: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      paidAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Payments");
  },
};

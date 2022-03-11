"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MidtransPayments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      OrderId: {
        type: Sequelize.STRING,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
      },
      transaction_id: {
        type: Sequelize.STRING,
      },
      transaction_status: {
        type: Sequelize.STRING,
      },
      payment_type: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.STRING,
      },
      transaction_time: {
        type: Sequelize.STRING,
      },
      signature_key: {
        type: Sequelize.STRING,
      },
      settlement_time: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("MidtransPayments");
  },
};

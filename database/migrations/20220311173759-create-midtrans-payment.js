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
      va_number: {
        type: Sequelize.STRING,
      },
      bankName: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.STRING,
      },
      pdf_url: {
        type: Sequelize.STRING,
      },
      transaction_time: {
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

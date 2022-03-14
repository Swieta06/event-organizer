"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Packages", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        unique: true,
      },
      minParticipant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      additionCost: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      maxSnack: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      features: {
        type: Sequelize.TEXT,
      },
      detailPrice: {
        type: Sequelize.TEXT,
      },
      minOrderTime: {
        type: Sequelize.INTEGER,
        defaultValue: 7,
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
    await queryInterface.dropTable("Packages");
  },
};

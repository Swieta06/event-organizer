"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      UserId: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        allowNull: false,
      },
      PackageId: {
        type: Sequelize.UUID,
        references: {
          model: "Packages",
          key: "id",
        },
        onUpdate: "CASCADE",
        allowNull: false,
      },
      ThemeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Themes",
          key: "id",
        },
        onUpdate: "CASCADE",
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      totalPrice: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      totalParticipant: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      desc: {
        type: Sequelize.TEXT,
      },
      eventAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Orders");
  },
};

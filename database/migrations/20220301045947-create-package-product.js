"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PackageProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PackageId: {
        type: Sequelize.UUID,
        references: {
          model: "Packages",
          key: "id",
        },
        onUpdate: "cascade",
        allowNull: false,
      },
      ProductId: {
        type: Sequelize.UUID,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "cascade",
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
    await queryInterface.dropTable("PackageProducts");
  },
};

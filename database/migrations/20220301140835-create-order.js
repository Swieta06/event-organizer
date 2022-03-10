"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
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
      PaymentMethodId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PaymentMethods",
          key: "id",
        },
        onUpdate: "CASCADE",
      },
      customerName: {
        type: Sequelize.STRING,
      },
      companyName: {
        type: Sequelize.STRING,
      },
      tel: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
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
      concept: {
        type: Sequelize.ENUM,
        values: ["indoor", "outdoor"],
      },
      eventAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      orderedAt: {
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
    Promise.all([
      queryInterface.dropTable("Orders"),
      queryInterface.sequelize.query(
        'DROP TYPE IF EXISTS "enum_Orders_concept";'
      ),
    ]);
  },
};

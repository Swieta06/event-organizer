"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "OrderProducts",
      [
        {
          // Makanan
          id: 1,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 2,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 3,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Talent
          id: 4,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kipas
          id: 5,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Sofa
          id: 6,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Kecil
          id: 7,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Meja
          id: 8,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Tenda
          id: 9,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."OrderProducts_id_seq" RESTART 10;'
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("OrderProducts", null, {});
  },
};

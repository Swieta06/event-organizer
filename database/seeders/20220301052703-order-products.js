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
        // order 1
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
        // order 2
        {
          // Makanan
          id: 10,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 11,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 12,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Talent
          id: 13,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kipas
          id: 14,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Sofa
          id: 15,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Kecil
          id: 16,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Meja
          id: 17,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Tenda
          id: 18,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // order 3
        {
          // Makanan
          id: 19,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 20,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 21,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Talent
          id: 22,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kipas
          id: 23,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Sofa
          id: 24,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Kecil
          id: 25,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Meja
          id: 26,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Tenda
          id: 27,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // order 4
        {
          // Makanan
          id: 28,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 29,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 30,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Talent
          id: 31,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kipas
          id: 32,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Sofa
          id: 33,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Kecil
          id: 34,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Meja
          id: 35,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Tenda
          id: 36,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // order 5
        {
          // Makanan
          id: 37,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 38,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 39,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Talent
          id: 40,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kipas
          id: 41,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Sofa
          id: 42,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Kecil
          id: 43,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Meja
          id: 44,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Tenda
          id: 45,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // order 6
        {
          // Makanan
          id: 46,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 47,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Snack
          id: 48,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Talent
          id: 49,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kipas
          id: 50,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Sofa
          id: 51,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Kursi Kecil
          id: 52,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Meja
          id: 53,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Tenda
          id: 54,
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
          OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
          qty: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."OrderProducts_id_seq" RESTART 55;'
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

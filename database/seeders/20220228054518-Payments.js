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
    await queryInterface.bulkInsert("Payments", [
      {
        id: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c2",
        OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
        photo: "payment1.png",
        bankName: "BCA",
        bankHolder: "Rama",
        bankNumber: "0718426194",
        price: 25000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c3",
        OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b3",
        photo: "payment2.png",
        bankName: "BCA",
        bankHolder: "Rama",
        bankNumber: "0718426194",
        price: 25000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c4",
        OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b4",
        photo: "payment3.png",
        bankName: "BCA",
        bankHolder: "Rama",
        bankNumber: "0718426194",
        price: 25000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c5",
        OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b5",
        photo: "payment4.png",
        bankName: "BCA",
        bankHolder: "Rama",
        bankNumber: "0718426194",
        price: 25000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c6",
        OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b6",
        photo: "payment5.png",
        bankName: "BCA",
        bankHolder: "Rama",
        bankNumber: "0718426194",
        price: 25000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Payments", null, {});
  },
};

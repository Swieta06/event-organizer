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
        id: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c1",
        OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
        photo: "",
        bankName: "BNI",
        bankHolder: "Haiqal",
        bankNumber: "0718426194",
        price: 25000000,
        paidAt: new Date("2022-03-15T14:20:00.000Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c1c1c1c1-c1c1-c1c1-c1c1-c1c1c1c1c1c2",
        OrderId: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
        photo: "",
        bankName: "BCA",
        bankHolder: "Rama",
        bankNumber: "0718426194",
        price: 25000000,
        paidAt: new Date("2022-03-15T14:20:00.000Z"),
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

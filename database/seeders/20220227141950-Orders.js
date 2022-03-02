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
      "Orders",
      [
        {
          id: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1",
          UserId: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          PackageId: "a6a6a6a6-a6a6-a6a6-a6a6-a6a6a6a6a6a6",
          status: 0,
          totalPrice: 25000000,
          totalParticipant: 30,
          desc: "",
          concept: "indoor",
          eventAt: new Date("2022-03-15T14:20:00.000Z"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b2",
          UserId: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          PackageId: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
          status: 0,
          totalPrice: 25000000,
          totalParticipant: 50,
          desc: "",
          concept: "outdoor",
          eventAt: new Date("2022-03-15T14:20:00.000Z"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Orders", null, {});
  },
};

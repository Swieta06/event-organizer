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
      "PaymentMethods",
      [
        {
          id: 1,
          bankName: "BCA",
          bankNumber: "1234567890",
          bankHolder: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."PaymentMethods_id_seq" RESTART 2;'
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("PaymentMethods", null, {});
  },
};

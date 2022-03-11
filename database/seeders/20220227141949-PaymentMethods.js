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
          bankBranch: "Buah Batu",
          bankNumber: "382371928",
          bankHolder: "PT Halloween Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          bankName: "Mandiri",
          bankBranch: "Bojong",
          bankNumber: "382371928",
          bankHolder: "PT Halloween Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          bankName: "BNI",
          bankBranch: "Jakarta Selatan",
          bankNumber: "382371928",
          bankHolder: "PT Halloween Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          bankName: "BRI",
          bankBranch: "Jakarta Barat",
          bankNumber: "382371928",
          bankHolder: "PT Halloween Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          bankName: "CIMB",
          bankBranch: "Jakarta Timur",
          bankNumber: "382371928",
          bankHolder: "PT Halloween Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          bankName: "Pembayaran Otomotis (BCA,BNI,BRI,Mandiri)",
          bankBranch: "Jakarta Timur",
          bankNumber: "382371928",
          bankHolder: "PT Halloween Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."PaymentMethods_id_seq" RESTART 6;'
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

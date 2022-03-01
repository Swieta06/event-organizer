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
      "PackageProducts",
      [
        {
          // Dokumentasi
          id: 1,
          PackageId: "a6a6a6a6-a6a6-a6a6-a6a6-a6a6a6a6a6a6",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Pen
          id: 2,
          PackageId: "a6a6a6a6-a6a6-a6a6-a6a6-a6a6a6a6a6a6",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Dokumentasi
          id: 3,
          PackageId: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Video
          id: 4,
          PackageId: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Pen
          id: 5,
          PackageId: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Notebook
          id: 6,
          PackageId: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Dokumentasi
          id: 7,
          PackageId: "a8a8a8a8-a8a8-a8a8-a8a8-a8a8a8a8a8a8",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Video
          id: 8,
          PackageId: "a8a8a8a8-a8a8-a8a8-a8a8-a8a8a8a8a8a8",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Pen
          id: 9,
          PackageId: "a8a8a8a8-a8a8-a8a8-a8a8-a8a8a8a8a8a8",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Notebook
          id: 10,
          PackageId: "a8a8a8a8-a8a8-a8a8-a8a8-a8a8a8a8a8a8",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Totebag
          id: 11,
          PackageId: "a8a8a8a8-a8a8-a8a8-a8a8-a8a8a8a8a8a8",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Dokumentasi
          id: 12,
          PackageId: "a9a9a9a9-a9a9-a9a9-a9a9-a9a9a9a9a9a9",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Notebook
          id: 13,
          PackageId: "a9a9a9a9-a9a9-a9a9-a9a9-a9a9a9a9a9a9",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // Pen
          id: 14,
          PackageId: "a9a9a9a9-a9a9-a9a9-a9a9-a9a9a9a9a9a9",
          ProductId: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."PackageProducts_id_seq" RESTART 15;'
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("PackageProducts", null, {});
  },
};

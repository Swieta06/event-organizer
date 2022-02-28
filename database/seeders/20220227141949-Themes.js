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
      "Themes",
      [
        {
          id: 1,
          name: "Custom Tema",
          photo: "https://via.placeholder.com/200",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Colorful",
          photo: "https://via.placeholder.com/200",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Gold & White",
          photo: "https://via.placeholder.com/200",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Monokrom",
          photo: "https://via.placeholder.com/200",
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Halloween",
          photo: "https://via.placeholder.com/200",
          type: 1,
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
  },
};

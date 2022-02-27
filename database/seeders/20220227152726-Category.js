'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
      'Categories',
      [
        {
          name:"makanan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"snack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"kipas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"kursi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"meja",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"talent",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:"tenda",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

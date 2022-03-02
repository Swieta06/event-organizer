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
          id: 1,
          name:"makanan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name:"snack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name:"kipas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name:"kursi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name:"meja",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name:"talent",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name:"tenda",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name:"dokumentasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name:"souvenir",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name:"themes",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."Categories_id_seq" RESTART 11;'
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

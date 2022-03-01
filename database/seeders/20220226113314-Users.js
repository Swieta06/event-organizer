'use strict';

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
      'Users',
      [
        {
          id: 'f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8',
          name: 'John Doe',
          email: 'customer@gmail.com',
          password:
            '$2a$10$MhJ07AtaKmsXeqzOB6abqepw3qqEbdtq1ItI4yCg2XbICJBHZ99cq', // password: '123456'
          role: 'customer',
          photo: '',
          address: 'Bogor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9',
          name: 'Jane Doe',
          email: 'admin@gmail.com',
          password:
            '$2a$10$MhJ07AtaKmsXeqzOB6abqepw3qqEbdtq1ItI4yCg2XbICJBHZ99cq', // password: '123456'
          role: 'admin',
          photo: '',
          address: 'Jakarta Selatan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f810',
          name: 'Hamid Baehaqi',
          email: 'hamid1bae1@gmail.com',
          password:
            '$2a$10$MhJ07AtaKmsXeqzOB6abqepw3qqEbdtq1ItI4yCg2XbICJBHZ99cq', // password: '123456'
          role: 'admin',
          photo: '',
          address: 'Jakarta Selatan',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};

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
      "Users",
      [
        {
          id: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          name: "John Doe",
          email: "customer@gmail.com",
          password:
            "$2a$10$MhJ07AtaKmsXeqzOB6abqepw3qqEbdtq1ItI4yCg2XbICJBHZ99cq", // password: '123456'
          role: "customer",
          photo: `https://ui-avatars.com/api/?name=John%20Doe&background=0D8ABC&color=fff&size=64`,
          address: "Bogor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f9",
          name: "Jane Doe",
          email: "admin@gmail.com",
          password:
            "$2a$10$MhJ07AtaKmsXeqzOB6abqepw3qqEbdtq1ItI4yCg2XbICJBHZ99cq", // password: '123456'
          role: "admin",
          photo: `https://ui-avatars.com/api/?name=Jane%20Doe&background=477e3e&color=fff&size=64`,
          address: "Jakarta Selatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f810",
          name: "Hamid Baehaqi",
          email: "hamid1bae1@gmail.com",
          password:
            "$2a$10$MhJ07AtaKmsXeqzOB6abqepw3qqEbdtq1ItI4yCg2XbICJBHZ99cq", // password: '123456'
          role: "admin",
          photo: `https://ui-avatars.com/api/?name=Hamid%20Baehaqi&background=FFEE58&color=fff&size=64`,
          address: "Jakarta Selatan",
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};

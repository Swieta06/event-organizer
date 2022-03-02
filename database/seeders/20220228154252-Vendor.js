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
     'Vendors',
     [
       {
         id: 1,
         name:"Event Organizer",
         province:"Jawa Barat",
         city:"Bekasi",
         phone:"086725673319",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        id: 2,
        name:"EO Planner",
        province:"Jawa Barat",
        city:"Depok",
        phone:"081725675532",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name:"Penyewa Tenda",
        province:"Jawa Barat",
        city:"Bekasi",
        phone:"081725673319",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name:"Penyewa Tenda",
        province:"Jawa Barat",
        city:"Depok",
        phone:"081725673319",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name:"Penyewa Tenda",
        province:"Jakarta",
        city:"Jakarta Selatan",
        phone:"081725673319",
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
     ],
     {}
   );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."Vendors_id_seq" RESTART 3;'
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Vendors", null, {});
  }
};

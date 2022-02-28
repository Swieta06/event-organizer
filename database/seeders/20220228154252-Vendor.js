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
         name:"Event Organizer",
         province:"Jawa Barat",
         city:"Bekasi",
         phone:"086725673319",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        name:"EO Planner",
        province:"Jawa Barat",
        city:"Depok",
        phone:"081725675532",
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
  }
};

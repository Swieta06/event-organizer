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
      "Vendors",
      [
        {
          id: 1,
          name: "EO Planner",
          province: "jawa barat",
          city: "bandung",
          phone: "086725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Catering Aa Zaki",
          province: "jawa barat",
          city: "bogor",
          phone: "081725675532",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Catering Teh Siska",
          province: "jawa barat",
          city: "bogor",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Catering Buah Hati",
          province: "jawa barat",
          city: "bogor",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Catering Gunung Bati",
          province: "jawa barat",
          city: "bandung",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Catering Kedai Oren",
          province: "jawa barat",
          city: "bandung",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Catering Kedai Rasa",
          province: "jawa barat",
          city: "bandung",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "Catering Kedai Kucing",
          province: "jakarta",
          city: "jakarta selatan",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "Catering Kedai Lala",
          province: "jakarta",
          city: "jakarta selatan",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Catering Kedai Udu",
          province: "jakarta",
          city: "jakarta selatan",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Penyewa Tenda Bogor",
          province: "jawa barat",
          city: "bogor",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: "Penyewa Tenda Bandung",
          province: "jawa barat",
          city: "bandung",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: "Penyewa Tenda Jakarta",
          province: "jakarta",
          city: "jakarta selatan",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          name: "Penyewa Kursi Bogor",
          province: "jawa barat",
          city: "bogor",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          name: "Penyewa Kursi Bandung",
          province: "jawa barat",
          city: "bandung",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          name: "Penyewa Kursi Jakarta",
          province: "jakarta",
          city: "jakarta selatan",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          name: "Penyewa Kipas Bogor",
          province: "jawa barat",
          city: "bogor",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          name: "Penyewa Kipas Bandung",
          province: "jawa barat",
          city: "bandung",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          name: "Penyewa Kipas Jakarta",
          province: "jakarta",
          city: "jakarta selatan",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          name: "Penyewa Meja Bogor",
          province: "jawa barat",
          city: "bogor",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          name: "Penyewa Meja Bandung",
          province: "jawa barat",
          city: "bandung",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          name: "Penyewa Meja Jakarta",
          province: "jakarta",
          city: "jakarta selatan",
          phone: "081725673319",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE public."Vendors_id_seq" RESTART 23;'
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Vendors", null, {});
  },
};

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
      "Packages",
      [
        {
          id: "a6a6a6a6-a6a6-a6a6-a6a6-a6a6a6a6a6a6",
          name: "Silver",
          slug: "silver",
          minParticipant: 30,
          price: 25000000,
          additionCost: 20000,
          maxSnack: 2,
          features:
            "Makanan berat + 2 jenis snack,Dokumentasi foto,Dekorasi,Souvenir (Pulpen custom)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
          name: "Gold",
          slug: "gold",
          minParticipant: 50,
          price: 25000000,
          additionCost: 30000,
          maxSnack: 2,
          features:
            "Makanan berat + 2 jenis snack,Dokumentasi foto & video kegiatan,Dekorasi,Souvenir (Pulpen custom & Notebook)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a8a8a8a8-a8a8-a8a8-a8a8-a8a8a8a8a8a8",
          name: "Platinum",
          slug: "platinum",
          minParticipant: 50,
          price: 25000000,
          additionCost: 30000,
          maxSnack: 3,
          features:
            "Makanan berat + 3 jenis snack,Dokumentasi foto & video kegiatan,Dekorasi,Souvenir (Pulpen custom, Notebook, dan Totebag)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a9a9a9a9-a9a9-a9a9-a9a9-a9a9a9a9a9a9",
          name: "Dadakan",
          slug: "dadakan",
          minParticipant: 50,
          price: 25000000,
          additionCost: 30000,
          maxSnack: 1,
          features:
            "Makanan berat + 1 jenis snack,Dokumentasi foto,Dekorasi,Souvenir (Notebook + Pen)",
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
    await queryInterface.bulkDelete("Packages", null, {});
  },
};

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
          price: 14700000,
          additionCost: 900000,
          maxSnack: 2,
          features:
            "Makanan berat + 2 jenis snack,Dokumentasi foto,Dekorasi,Souvenir (Pulpen custom)",
          detailPrice:
            '{"makanan":50000,"snack":10000,"photo":2000000,"video":0,"pulpen":20000,"notebook":0,"totebag":0,"themes":10000000}',
          minOrderTime: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a7a7a7a7-a7a7-a7a7-a7a7-a7a7a7a7a7a7",
          name: "Gold",
          slug: "gold",
          minParticipant: 30,
          price: 18900000,
          additionCost: 1300000,
          maxSnack: 2,
          features:
            "Makanan berat + 2 jenis snack,Dokumentasi foto & video kegiatan,Dekorasi,Souvenir (Pulpen custom & Notebook)",
          detailPrice:
            '{"makanan":50000,"snack":10000,"photo":2000000,"video":3000000,"pulpen":20000,"notebook":40000,"totebag":0,"themes":10000000}',
          minOrderTime: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a8a8a8a8-a8a8-a8a8-a8a8-a8a8a8a8a8a8",
          name: "Platinum",
          slug: "platinum",
          minParticipant: 30,
          price: 21000000,
          additionCost: 2000000,
          maxSnack: 3,
          features:
            "Makanan berat + 3 jenis snack,Dokumentasi foto & video kegiatan,Dekorasi,Souvenir (Pulpen custom, Notebook, dan Totebag)",
          detailPrice:
            '{"makanan":50000,"snack":10000,"photo":2000000,"video":3000000,"pulpen":20000,"notebook":40000,"totebag":60000,"themes":10000000}',
          minOrderTime: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a9a9a9a9-a9a9-a9a9-a9a9-a9a9a9a9a9a9",
          name: "Dadakan",
          slug: "dadakan",
          minParticipant: 30,
          price: 14400000,
          additionCost: 800000,
          maxSnack: 1,
          features:
            "Makanan berat + 1 jenis snack,Dokumentasi foto,Dekorasi,Souvenir (Notebook + Pen)",
          detailPrice:
            '{"makanan":50000,"snack":10000,"photo":2000000,"video":0,"pulpen":20000,"notebook":0,"totebag":0,"themes":10000000}',
          minOrderTime: 7,
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

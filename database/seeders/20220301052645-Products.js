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
      "Products",
      [
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d1",
          name: "SYNRGY Photographer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eget semper euismod",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d2",
          name: "SYNRGY Videographer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eget semper euismod",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d3",
          name: "SYNRGY Pen Custom",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eget semper euismod",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d4",
          name: "SYNRGY Notebook",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eget semper euismod",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d5",
          name: "SYNRGY Totebag",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eget semper euismod",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
          name: "Nasi Goreng",
          description:
            "Dilengkapi dengan isian potongan ayam, telur, sosis, bakso, dan acar",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
          name: "Sus Vla",
          description:
            "Kue sus lembut dengan isi vla vanila dan taburan gula diatasnya.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
          name: "Brownies",
          description:
            "Potongan brownies panggang lembut dengan topping almond.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          name: "Pembawa Acara",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
          name: "Kipas",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
          name: "Kursi Sofa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
          name: "Kursi Ragna",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 18000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
          name: "Round Table",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
          name: "Tenda",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS MAKANAN
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6df",
          name: "Nasi Kuning",
          description:
            "Dilengkapi dengan isian ayam suwir, telur, sayur, dan saus.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e0",
          name: "Nasi Uduk",
          description:
            "Disajikan dengan ragam lauk seperti telur, bihun, tempe orek, dan bakwan.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e1",
          name: "Mie Seafood",
          description:
            "Mie goreng seafood pedas dilengkapi dengan pangsit isi ayam dan selada.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e2",
          name: "Soto Mie",
          description:
            "Soto ayam kuah bening dengan isian ayam suwir, sayuran, dan telur rebus.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS SNACK
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e3",
          name: "Risoles",
          description:
            "Risoles isi smoked beef dengan perpaduan mozarella dan mayonaise.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e4",
          name: "Pastel",
          description:
            "Kue pastel gurih dengan isian bihun, sayur dan ayam suwir.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e5",
          name: "Mini Sandwich",
          description:
            "Mini sandwich yang terdiri dari bun, potongan smoked beef, dan mayonaise.",
          price: 0,
          stock: 1,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS TALENT
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e6",
          name: "Musisi",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e7",
          name: "Stand up",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e8",
          name: "Sulap",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e9",
          name: "Dancer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS KIPAS
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ea",
          name: "Kipas-2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6eb",
          name: "Kipas-3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ec",
          name: "Kipas-4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ed",
          name: "Kipas-5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS KURSI
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ee",
          name: "Kursi-2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 20000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ef",
          name: "Kursi-3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 35000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f0",
          name: "Kursi-4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 30000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f1",
          name: "Kursi-5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 35000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS MEJA
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f2",
          name: "Round Table",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 40000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f3",
          name: "Round Table",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 50000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f4",
          name: "Meja-4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 40000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f5",
          name: "Meja-5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 50000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS TENDA
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f6",
          name: "Tenda-2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f7",
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f7",
          name: "Tenda-3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f8",
          name: "Tenda-4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f9",
          name: "Tenda-5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 300000,
          stock: 20,
          photo: "https://via.placeholder.com/200",
          VendorId: 1,
          CategoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS Themes
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a1",
          name: "Custom Tema",
          description:
            "Diskusikan dengan menekan tombol Whatsapp pada halaman detail pesanan.",
          photo: "https://via.placeholder.com/200",
          VendorId: 2,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a2",
          name: "Colorful",
          description:
            "Dekorasi warna-warni yang memberi kesan ceria dan energik.",
          photo: "https://via.placeholder.com/200",
          VendorId: 2,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a3",
          name: "Gold & White",
          description:
            "Perpaduan emas dan putih memberi kesan elegan dan persatuan.",
          photo: "https://via.placeholder.com/200",
          VendorId: 2,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a4",
          name: "Monokrom",
          description:
            "Perpaduan hitam dan putih memberi kesan sederhana dan hangat.",
          photo: "https://via.placeholder.com/200",
          VendorId: 2,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a5",
          name: "Halloween",
          description:
            "Dekorasi dihiasi banyak bunga indah memberi kesan santai dan menyenangkan.",
          photo: "https://via.placeholder.com/200",
          VendorId: 2,
          CategoryId: 10,
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};

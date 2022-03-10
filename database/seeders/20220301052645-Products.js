"use strict";

const uuid = require("uuid").v4;

const vendor = [3, 4, 5, 6, 7, 8, 9, 10];
const vendorKipas = [18, 19];
const vendorKursi = [15, 16];
const vendorMeja = [21, 22];
const vendorTenda = [12, 13];

const kota = [
  "bogor",
  "bogor",
  "Bogor",
  "Bogor",
  "Bogor",
  "Jaksel",
  "Jaksel",
  "Jaksel",
];

const kotaLain = ["Bogor", "Jaksel"];

const makanan = [
  // HERE IS MAKANAN
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d6",
    name: "Nasi Goreng",
    description:
      "Dilengkapi dengan isian potongan ayam, telur, sosis, bakso, dan acar",
    price: 0,
    stock: 1,
    photo: "product26.png",
    VendorId: 2,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6df",
    name: "Nasi Kuning",
    description: "Dilengkapi dengan isian ayam suwir, telur, sayur, dan saus.",
    price: 0,
    stock: 1,
    photo: "product27.png",
    VendorId: 2,
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
    photo: "product28.png",
    VendorId: 2,
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
    photo: "product29.png",
    VendorId: 2,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e2",
    name: "Soto Ayam",
    description:
      "Soto ayam kuah bening dengan isian ayam suwir, sayuran, dan telur rebus.",
    price: 0,
    stock: 1,
    photo: "product30.png",
    VendorId: 2,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6a6",
    name: "Nasi Bakar",
    description: "Dilengkapi dengan isian ayam suwir, telur, dan saus.",
    price: 0,
    stock: 1,
    photo: "product46.png",
    VendorId: 2,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6a7",
    name: "Mie Goreng",
    description:
      "Disajikan dengan ragam lauk seperti telur, bihun, tempe orek, dan bakwan.",
    price: 0,
    stock: 1,
    photo: "product47.png",
    VendorId: 2,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6a8",
    name: "Mie Ayam",
    description:
      "Mie Ayam pedas dilengkapi dengan pangsit isi ayam dan selada.",
    price: 0,
    stock: 1,
    photo: "product48.png",
    VendorId: 2,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6a9",
    name: "Ikan Bakar",
    description: "Ikan Bakar dengan isian telur rebus.",
    price: 0,
    stock: 1,
    photo: "product49.png",
    VendorId: 2,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const snack = [
  // HERE IS SNACK
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d7",
    name: "Sus Vla",
    description:
      "Kue sus lembut dengan isi vla vanila dan taburan gula diatasnya.",
    price: 0,
    stock: 1,
    photo: "product31.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d8",
    name: "Brownies",
    description: "Potongan brownies panggang lembut dengan topping almond.",
    price: 0,
    stock: 1,
    photo: "product32.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e3",
    name: "Risoles",
    description:
      "Risoles isi smoked beef dengan perpaduan mozarella dan mayonaise.",
    price: 0,
    stock: 1,
    photo: "product33.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6e4",
    name: "Pastel",
    description: "Kue pastel gurih dengan isian bihun, sayur dan ayam suwir.",
    price: 0,
    stock: 1,
    photo: "product34.png",
    VendorId: 2,
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
    photo: "product35.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6b4",
    name: "Sus Vla 2",
    description:
      "Kue sus lembut dengan isi vla vanila dan taburan gula diatasnya.",
    price: 0,
    stock: 1,
    photo: "product31.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6b5",
    name: "Brownies 2",
    description: "Potongan brownies panggang lembut dengan topping almond.",
    price: 0,
    stock: 1,
    photo: "product32.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6b1",
    name: "Risoles 2",
    description:
      "Risoles isi smoked beef dengan perpaduan mozarella dan mayonaise.",
    price: 0,
    stock: 1,
    photo: "product33.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6b2",
    name: "Pastel 2",
    description: "Kue pastel gurih dengan isian bihun, sayur dan ayam suwir.",
    price: 0,
    stock: 1,
    photo: "product34.png",
    VendorId: 2,
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const kipas = [
  // HERE IS KIPAS
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6da",
    name: "Krisbow 16 inch",
    description:
      "Humidifier dengan kapasitas tangki 2L, dilengkapi mode swing dan fitur pengaturan",
    price: 200000,
    stock: 20,
    photo: "product6.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ea",
    name: "Regency 26 inch",
    description:
      "Memiliki kapasitas tangki 20L, dilengkapi embun air dan mode swing 90 derajat",
    price: 250000,
    stock: 20,
    photo: "product7.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6eb",
    name: "Misty cool 26 inch",
    description:
      "Spray fan dengan kapasitas tangki 60L, dilengkapi fitur pengaturan kecepatan air",
    price: 350000,
    stock: 20,
    photo: "product8.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ec",
    name: "Centrifungal 30 inch",
    description: "Mist fan dengan kapasitas tangki 41L, tahan hingga 10 jam",
    price: 300000,
    stock: 20,
    photo: "product9.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ed",
    name: "Misty cool 30 inch",
    description:
      "Spray fan dengan kapasitas tangki 60L, jangkauan lebih luas, dan tahan lama.",
    price: 400000,
    stock: 20,
    photo: "product10.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Krisbow-2 16 inch",
    description:
      "Humidifier dengan kapasitas tangki 2L, dilengkapi mode swing dan fitur pengaturan",
    price: 200000,
    stock: 20,
    photo: "product6.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Regency-2 26 inch",
    description:
      "Memiliki kapasitas tangki 20L, dilengkapi embun air dan mode swing 90 derajat",
    price: 250000,
    stock: 20,
    photo: "product7.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Misty cool-2 26 inch",
    description:
      "Spray fan dengan kapasitas tangki 60L, dilengkapi fitur pengaturan kecepatan air",
    price: 350000,
    stock: 20,
    photo: "product8.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Centrifungal-2 30 inch",
    description: "Mist fan dengan kapasitas tangki 41L, tahan hingga 10 jam",
    price: 300000,
    stock: 20,
    photo: "product9.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Misty cool-2 30 inch",
    description:
      "Spray fan dengan kapasitas tangki 60L, jangkauan lebih luas, dan tahan lama.",
    price: 400000,
    stock: 20,
    photo: "product10.png",
    VendorId: 17,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const kursi = [
  // HERE IS KURSI
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6db",
    name: "Pouffe",
    description:
      "Berukuran 45cm x 25cm dengan busa empuk dilapisi katun lembut",
    price: 35000,
    stock: 20,
    photo: "product11.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dc",
    name: "Event chair",
    description: "Berukuran 40cm x 45cm x 47cm dengan material plastik premium",
    price: 15000,
    stock: 20,
    photo: "product12.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6dd",
    name: "Ragna chair",
    description:
      "Berukuran 55cm x 46cm x 81,5cm dengan material premium desain modern",
    price: 20000,
    stock: 20,
    photo: "product13.png",
    VendorId: 14,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ee",
    name: "Picchio chair",
    description: "Berukuran 53cm x 53cm x 88cm dengan material kayu dan busa.",
    price: 35000,
    stock: 20,
    photo: "product14.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6ef",
    name: "Raakel chair",
    description:
      "Berukuran 61cm x 62cm x 81cm dengan material kayu dan metal .",
    price: 40000,
    stock: 20,
    photo: "product15.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Pouffe-2",
    description:
      "Berukuran 45cm x 25cm dengan busa empuk dilapisi katun lembut",
    price: 35000,
    stock: 20,
    photo: "product11.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Event chair-2",
    description: "Berukuran 40cm x 45cm x 47cm dengan material plastik premium",
    price: 15000,
    stock: 20,
    photo: "product12.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Ragna chair-2",
    description:
      "Berukuran 55cm x 46cm x 81,5cm dengan material premium desain modern",
    price: 20000,
    stock: 20,
    photo: "product13.png",
    VendorId: 14,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Picchio chair-2",
    description: "Berukuran 53cm x 53cm x 88cm dengan material kayu dan busa.",
    price: 35000,
    stock: 20,
    photo: "product14.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Raakel chair-2",
    description: "Berukuran 61cm x 62cm x 81cm dengan material kayu dan metal.",
    price: 40000,
    stock: 20,
    photo: "product15.png",
    VendorId: 14,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const meja = [
  // HERE IS MEJA
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f2",
    name: "Round table (S)",
    description:
      "Diameter meja 40cm dan tinggi 100cm cocok untuk keperluan perorangan.",
    price: 20000,
    stock: 20,
    photo: "product16.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f3",
    name: "Round table (M)",
    description:
      "Diameter meja 100 cm dengan material melamine nyaman ditempati 4 orang.",
    price: 50000,
    stock: 20,
    photo: "product17.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f4",
    name: "Round table (L)",
    description:
      "Diameter meja 120 cm dengan material melamine nyaman ditempati 6 orang.",
    price: 70000,
    stock: 20,
    photo: "product18.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f5",
    name: "Rectangular table (S)",
    description:
      "Berukuran 180cm x 90cm dengan material kayu nyaman ditempati 6 orang.",
    price: 100000,
    stock: 20,
    photo: "product19.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Rectangular table (M)",
    description:
      "Berukuran 250cm x 110cm dengan material kayu nyaman ditempati 8 orang.",
    price: 130000,
    stock: 20,
    photo: "product20.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Round table-2 (S)",
    description:
      "Diameter meja 40cm dan tinggi 100cm cocok untuk keperluan perorangan.",
    price: 20000,
    stock: 20,
    photo: "product16.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Round table-2 (M)",
    description:
      "Diameter meja 100 cm dengan material melamine nyaman ditempati 4 orang.",
    price: 50000,
    stock: 20,
    photo: "product17.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Round table-2 (L)",
    description:
      "Diameter meja 120 cm dengan material melamine nyaman ditempati 6 orang.",
    price: 70000,
    stock: 20,
    photo: "product18.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Rectangular table-2 (S)",
    description:
      "Berukuran 180cm x 90cm dengan material kayu nyaman ditempati 6 orang.",
    price: 100000,
    stock: 20,
    photo: "product19.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Rectangular table-2 (M)",
    description:
      "Berukuran 250cm x 110cm dengan material kayu nyaman ditempati 8 orang.",
    price: 130000,
    stock: 20,
    photo: "product20.png",
    VendorId: 20,
    CategoryId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const tenda = [
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6de",
    name: "Tenda prisma",
    description:
      "Tenda prisma dengan ukuran 5m x 6m dilengkapi tirai putih dan lampu.",
    price: 1000000,
    stock: 20,
    photo: "product21.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f6",
    name: "Tenda plampang",
    description:
      "Tenda plampang dengan ukuran 6m x 6m dilengkapi tirai, rumbai, dan lampu.",
    price: 1200000,
    stock: 20,
    photo: "product22.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f7",
    name: "Tenda plafon",
    description:
      "Tenda plafon waterproff dengan ukuran 8m x 6m dilengkapi tirai dan lampu.",
    price: 1800000,
    stock: 20,
    photo: "product23.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f8",
    name: "Tenda frame",
    description:
      "Tenda transparan dengan ukuran 6m x 6m dilengkapi kain, daun hias, dan lampu.",
    price: 2000000,
    stock: 20,
    photo: "product24.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6f9",
    name: "Tenda roder",
    description:
      "Tenda roder transparan dengan ukuran 8m x 6m belum termasuk hiasan.",
    price: 2900000,
    stock: 20,
    photo: "product25.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Tenda prisma-2",
    description:
      "Tenda prisma dengan ukuran 5m x 6m dilengkapi tirai putih dan lampu.",
    price: 1000000,
    stock: 20,
    photo: "product21.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Tenda plampang-2",
    description:
      "Tenda plampang dengan ukuran 6m x 6m dilengkapi tirai, rumbai, dan lampu.",
    price: 1200000,
    stock: 20,
    photo: "product22.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Tenda plafon-2",
    description:
      "Tenda plafon waterproff dengan ukuran 8m x 6m dilengkapi tirai dan lampu.",
    price: 1800000,
    stock: 20,
    photo: "product23.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Tenda frame-2",
    description:
      "Tenda transparan dengan ukuran 6m x 6m dilengkapi kain, daun hias, dan lampu.",
    price: 2000000,
    stock: 20,
    photo: "product24.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid(),
    name: "Tenda roder-2",
    description:
      "Tenda roder transparan dengan ukuran 8m x 6m belum termasuk hiasan.",
    price: 2900000,
    stock: 20,
    photo: "product25.png",
    VendorId: 11,
    CategoryId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 9; j++) {
    makanan.push({
      id: uuid(),
      name: `${makanan[j].name} ${kota[i]}`,
      description: `${makanan[j].description}`,
      price: 0,
      stock: 1,
      photo: `${makanan[j].photo}`,
      VendorId: vendor[i],
      CategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    snack.push({
      id: uuid(),
      name: `${snack[j].name} ${kota[i]}`,
      description: `${snack[j].description}`,
      price: 0,
      stock: 1,
      photo: `${snack[j].photo}`,
      VendorId: vendor[i],
      CategoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 10; j++) {
    kipas.push({
      id: uuid(),
      name: `${kipas[j].name} ${kotaLain[i]}`,
      description: `${kipas[j].description}`,
      price: `${kipas[j].price + Math.floor(Math.random() * 50000)}`,
      stock: 20,
      photo: `${kipas[j].photo}`,
      VendorId: vendorKipas[i],
      CategoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    kursi.push({
      id: uuid(),
      name: `${kursi[j].name} ${kotaLain[i]}`,
      description: `${kursi[j].description}`,
      price: `${kursi[j].price + Math.floor(Math.random() * 10000)}`,
      stock: 20,
      photo: `${kursi[j].photo}`,
      VendorId: vendorKursi[i],
      CategoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    meja.push({
      id: uuid(),
      name: `${meja[j].name} ${kotaLain[i]}`,
      description: `${meja[j].description}`,
      price: `${meja[j].price + Math.floor(Math.random() * 20000)}`,
      stock: 20,
      photo: `${meja[j].photo}`,
      VendorId: vendorMeja[i],
      CategoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    tenda.push({
      id: uuid(),
      name: `${tenda[j].name} ${kotaLain[i]}`,
      description: `${tenda[j].description}`,
      price: `${tenda[j].price + Math.floor(Math.random() * 500000)}`,
      stock: 20,
      photo: `${tenda[j].photo}`,
      VendorId: vendorTenda[i],
      CategoryId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

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
        // HERE IS TALENT
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d6d9",
          name: "Pembawa Acara",
          description:
            "Talent 2 orang untuk memandu jalannya acara, sesi formal dan nonformal.",
          price: 300000,
          photo: "product1.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Stand up",
          description:
            "Komika melakukan one man show sesuai dengan materi yang telah disiapkan.",
          price: 300000,
          photo: "product2.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Musisi",
          description:
            "Terdiri dari 3-4 orang, memainkan maksimal 3 lagu dengan durasi 8-10 menit.",
          price: 300000,
          photo: "product3.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Dancer",
          description:
            "Group dancer 5-7 orang, menampilkan maksimal 2 tarian berdurasi 8-10 menit.",
          price: 300000,
          photo: "product4.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Sulap",
          description:
            "Atraksi sulap oleh 1-2 orang dengan durasi maksimal 10 menit.",
          price: 300000,
          photo: "product5.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Akustik",
          description:
            "Dapat memainkan maksimal 3 lagu dengan durasi 8-10 menit.",
          price: 300000,
          photo: "product42.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Paduan Suara",
          description:
            "Mengiringi suara lagu dengan suara lainnya dengan durasi maksimal 10 menit.",
          price: 300000,
          photo: "product43.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Penari Rakyat",
          description:
            "Dapat melakukan beberapa tarian berdasarkan kriteria yang telah ditentukan.",
          price: 300000,
          photo: "product41.png",
          VendorId: 1,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HERE IS MAKANAN
        ...makanan,
        // HERE IS SNACK
        ...snack,
        // HERE IS KIPAS
        ...kipas,
        // HERE IS KURSI
        ...kursi,
        // HERE IS MEJA
        ...meja,
        // HERE IS TENDA
        ...tenda,
        // HERE IS Themes
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a1",
          name: "Custom Tema",
          description:
            "Diskusikan dengan menekan tombol Whatsapp pada halaman detail pesanan.",
          photo: "product36.png",
          VendorId: 1,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a2",
          name: "Colorful",
          description:
            "Dekorasi warna-warni yang memberi kesan ceria dan energik.",
          photo: "product37.png",
          price: 0,
          VendorId: 1,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a3",
          name: "Gold & White",
          description:
            "Perpaduan emas dan putih memberi kesan elegan dan persatuan.",
          photo: "product38.png",
          price: 0,
          VendorId: 1,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a4",
          name: "Monokrom",
          description:
            "Perpaduan hitam dan putih memberi kesan sederhana dan hangat.",
          photo: "product39.png",
          price: 0,
          VendorId: 1,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d6d6d6d6-d6d6-d6d6-d6d6-d6d6d6d6d7a5",
          name: "Halloween",
          description:
            "Dekorasi dihiasi banyak bunga indah memberi kesan santai dan menyenangkan.",
          photo: "product40.png",
          price: 0,
          VendorId: 1,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Vintage",
          description:
            "Acara dengan tema vintage memberi kesan elegan dan menyenangkan.",
          photo: "product44.png",
          price: 0,
          VendorId: 1,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          name: "Shimmering",
          description:
            "Dekorasi dengan warna penuh emas dan silver yang memberi kesan mewah.",
          photo: "product45.png",
          price: 0,
          VendorId: 1,
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

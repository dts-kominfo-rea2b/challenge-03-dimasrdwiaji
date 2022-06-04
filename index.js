// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// Belajar anonymous function
const listBelanjaan = function(aryObj) {
  // Buat array kosong
  let itemBelanja = [];

  // Buat for loop untuk tiap barang belanjaan untuk di push ke array kosong
  for (let i = 0; i < aryObj.length; i++) {
    itemBelanja[i] = `- ${aryObj[i].nama} x ${aryObj[i].kuantitas}`;
  }
  return itemBelanja;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// Belajar pake arrow function
const totalBelanjaan = (aryObj) => {
  let hargaTotal = 0;

  // Buat for loop untuk hitung total harga per item belanja dan ditotal
  for (const element of aryObj) {
    hargaTotal += element.harga * element.kuantitas;
  }

  return hargaTotal;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};

/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga){

  if (harga > bayar) {
    return 'uang tidak cukup';
  }

  var limit = 5;
  var obj = {};
  var uang = bayar - harga;
  var uangKertas = [100000, 50000, 20000, 10000, 5000, 2000, 1000];

  for (var i = 0; i < uangKertas.length; i++) {
    if (uang >= uangKertas[i]) {
      var jumlahUang = Math.floor(uang / uangKertas[i]);
      if (jumlahUang > limit) {
        obj[uangKertas[i]] = limit;
        uang = uang - (limit * uangKertas[i]);
      } else {
        obj[uangKertas[i]] = jumlahUang;
        uang %= uangKertas[i];
      }
      // console.log(uang);
    }
  } 
  return obj;
}

// Test Case
console.log(hitungKembalian(1000000, 755000)); //1jt, 755rb
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000)); //40rb, 35rb
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000)); //920rb, 80rb
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup



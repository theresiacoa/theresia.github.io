/*
================
findOutlier
================

[INSTRUCTIONS]

findOutlier adalah sebuah function yang menerima satu parameter berupa array yang berisi number.
function tersebut akan memeriksa angka mana saja yang berbeda dengan angka lain, perbedaannya dilihat dari ganjil atau genap.
dan function akan mereturn angka yang berbeda dengan angka lainnya.

jika tidak ada data pada array yang diinput, maka outpunya 'no number'

[EXAMPLE]

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
output: 11
karena hanya 11 yang ganjil, sisanya genap

findOutlier([160, 3, 1719, 19, 11, 13, 21])
output: 160 
karena hanya 160 yang genap, sisanya ganjil

RULES:
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan Math.max, Math.min, .sort
- Dilarang menggunakan regex .match dan lainnya!
*/

function findOutlier(array) {
  if (array.length === 0) {
    return 'no number';
  }

  var counterGenap = 0;
  var counterGanjil = 0;

  for (var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      counterGenap++;
      var genap = array[i];
    } else if (array[i] % 2 === 1){
      counterGanjil++;
      var ganjil = array[i];
    }
  }
  // console.log(counterGanjil, counterGenap);

  if (counterGanjil === 1) {
    return ganjil;
  } else {
    return genap;
  }
}

console.log(findOutlier([2, 4, 6, 100, 4, 11, 8, 50])); // 11

console.log(findOutlier([160, 3, 1719, 19, 11, 13, 21])); // 160

console.log(findOutlier([])) // 'no number'
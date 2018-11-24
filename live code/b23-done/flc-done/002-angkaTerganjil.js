/*
================
Angka Ganjil Terbesar
================

[INSTRUCTIONS]

angkaTerganjil adalah sebuah function yang menerima satu parameter berupa array of number.
function akan mereturn sebuah angka ganjil terbesar dalam array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka 0

[RULE]
- WAJIB MENYERTAKAN algoritma / pseudocode
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan Math.max, Math.min, .sort
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
angkaTerganjil([1,2,3,4,5,6,7])

output: 7
*/

function angkaTerganjil(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      if (result < array[i]) {
        result = array[i];
      }
    }
  }
  return result;
}

console.log(angkaTerganjil([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 9
console.log(angkaTerganjil([7, 6, 5, 3, 1, 10])); // 7
console.log(angkaTerganjil([3, 3, 3, 5, 3])); // 5
console.log(angkaTerganjil([2, 4, 6, 8])); // 0
console.log(angkaTerganjil([1, 1, 3, 3, 5, 5, 7, 11, 11, 9, 9])); // 11

/**
  ************
  TAMBAH DASH
  ************

  Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string.
  Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara
  dua angka ganjil di dalam string yang menjadi parameter tersebut.

  Contoh 1:
  ---------
  input: '1233897'
  output: '123-389-7'

  Contoh 2:
  ---------
  input: '1739028'
  output: '1-7-3-9028'

  RULES:
    - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
    - TIDAK BOLEH MENGGUNAKAN BUILT IN FUNCTION DAN FUNCTION ES6 APAPUN

**/

/*
1. membuat var result untuk menampung hasil
2. membuat looping dari input
  2.a. jika input dibagi 2 === 0, masukan input ke dalam result
  2.b. jika tidak, masukan input ke dalam result
    2.b.a. jika input + 1 sama dengan ganjil maka tambahkan result dengan '-'
3. tampilkan result
*/

function tambahDash(str) {
  var result = '';
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) % 2 === 0) {
      result += str[i];
    }
    else {
      result += str[i];
      if (Number(str[i + 1]) % 2 !== 0) {
        result += '-';
      }
    }
  }
  return result;
}

console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'

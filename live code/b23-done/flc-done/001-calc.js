/*
  buatlah function calc yang menerima satu parameter berupa string, function akan mengembalikan menghitung hasil sesuai string tersebut.
  String tersebut hanya menerima 1 perhitungan
  operator perhitungan yang diterima sebagai berikut 
    * untuk perkalian
    : untuk pembagian
    + untuk penjumlahan
    - untuk pengurangan
    % untuk modulus

  RULES
  1. Wajib menyertakan pseudocode atau algorithma, tidak ada pseudocode atau algorithma
     program tidak akan dinilai
  2. Tidak boleh menggunakan built in function seperti .split, .map, .reduce, .filter
  3. Dilarang menggunakan regex seperti .match, .replace, dll
*/

function calc(stringData) {
  var number = '0123456789';
  var num = '';
  var result = 0;
  var arr = [];

  //split number
  for (var i = 0; i < stringData.length; i++) {
    var isNum = false;
    for (var j = 0; j < number.length; j++) {
      if (stringData[i] === number[j]) {
        num = num + stringData[i];
        isNum = true;
      }
    }
    if (!isNum) {
      arr.push(Number(num));
      arr.push(stringData[i]);
      num = '';
    }
    if (i === stringData.length - 1) {
      arr.push(Number(num));
    }
  }
  if (arr[1] === '*') {
    return arr[0] * arr[2];
  } else if (arr[1] === '+') {
    return arr[0] + arr[2];
  } else if (arr[1] === '-') {
    return arr[0] - arr[2];
  } else if (arr[1] === ':') {
    return arr[0] / arr[2];
  } else if (arr[1] === '%') {
    return arr[0] % arr[2];
  }
}

//Test case
console.log(calc("102*2")); // 204
console.log(calc("2+3")); // 5
console.log(calc("100:25")); // 4
console.log(calc("10%2")); // 0
console.log(calc("99-2")); // 97


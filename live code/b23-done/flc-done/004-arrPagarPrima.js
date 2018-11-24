/*
================
Array Pagar Prima
================

[INSTRUCTIONS]

arrayPagarPrima adalah sebuah function yang menerima satu parameter berupa array multidimensi.
function akan mereturn array multidimensi dengan merubah angka prima menjadi pagar.
Jika tidak input, maka function akan mereturn 'tidak ada array'

[EXAMPLE]
arrayPagarPrima([
  [5, 7, 10],
  [8, 2, 3],
  [44, 50, 22]
])

output:
[
  ['#', '#', 10],
  [8, '#', '#'],
  [44, 50, 22]
]

RULES:
  - DILARANG menambahkan parameter baru
  - DILARANG menggunakan built in function .indexOf, .include, .findIndex, .reduce, .map, .filter
  - DILARANG menggunakan REGEX
*/
function arrayPagarPrima(angka) {
  
  for (var i = 0; i < angka.length; i++) {
    for (var j = 0; j < angka[i].length; j++) {
      var isPrima = true;
      for (var k = 2; k < angka[i][k]; k++) {
        if (angka[i][j] % k === 0 && angka[i][j] !== 2) {
          isPrima = false;
        }
      }
      // console.log(isPrima, angka[i][j], k);
      if (isPrima) {
        angka[i][j] = '#';
      }
    }
  }
  if (array.length === 0) {
    return 'tidak ada array';
  }
  return angka;
}

console.log(arrayPagarPrima([[5, 7, 10], [8, 2, 3], [44, 50, 22]]));

/*
[
  ['#', '#', 10],
  [8, '#, '#'],
  [44, 50, 22]
]
*/

console.log(arrayPagarPrima([
  [2, 3, 5],
  [7, 11, 13],
  [17, 19, 23]
]));

/*
[
  ['#', '#', '#'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

console.log(arrayPagarPrima([
  [12, 30, 50],
  [70, 10, 30],
  [10, 10, 20]
]));

/*
[
  [12, 30, 50],
  [70, 10, 30],
  [10, 10, 20]
]
 */

console.log(arrayPagarPrima([]));

// // // 'tidak ada array'


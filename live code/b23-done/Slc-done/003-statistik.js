/*
====================================
Number and Array Mastery: Statistics
====================================
Name Here :_____________
[INSTRUKSI]
Tersedia 3 input:
1) kata (2 kemungkinan: 'min' atau 'max')
2) array berisi angka-angka positif
3) array berisi angka-angka positif
Output:
Jika kata adalah 'min', maka return hasil terkecil dari dua array yang ada
Jika kata adalah 'max', maka return hasil terbesar dari dua array yang ada
[CONTOH]
1) 'max', [6, 2, 4, 10, 8, 2] , [4, 7, 9, 19]  -->   10 , 19
2) 'min', [5, 11, 18, 6] , [3, 9, 10, 13]  -->    5 , 3

rules:
1. tidak boleh menggunakan Math.max, Math.min, .map, .sort, .reduce, .filter
*/

function statistik(kata, arr1, arr2) {

  if (arr1.length > arr2.length) {
    var length = arr1.length;
  } else {
    length = arr2.length;
  }

  var result1 = '';
  var result2 = '';
  for (var i = 0; i < length; i++) {
    if (result1 === '' && result2 === '') {
      result1 = arr1[i];
      result2 = arr2[i];
    }

    if (kata === 'min') {
      if (arr1[i] < result1) {
        result1 = arr1[i];
      }
      if (arr2[i] < result2) {
        result2 = arr2[i];
      }

    } else if (kata === 'max') {
      if (arr1[i] > result1) {
        result1 = arr1[i];
      }
      if (arr2[i] > result2) {
        result2 = arr2[i];
      }
    } 
  }
  return result1 + ' ' + result2;
}

console.log(statistik("min", [1, 1, 1], [8, 15, 17, 9])); // 1 8
console.log(statistik("max", [4, 8, 9, 12], [33, 88, 99, 11])); // 12 99
console.log(statistik("min", [1, 2, 5, 2, 2], [67, 45, 55])); // 1 45
console.log(statistik("max", [6, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 10 23
console.log(statistik("min", [5, 11, 18, 6], [3, 1, 8, 13])); // 5 1


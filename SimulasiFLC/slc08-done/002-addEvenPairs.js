/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan
NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir
RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid
*/

/* PSEUDOCODE

STORE 'result' with 0 (num)
STORE 'puluhan' with blank string

FOR each value of str with increment index(i) by 2
  SET 'puluhan' with the value of str index(i) plus str index(i)+1
  IF str index(i)+1 is UNDEFINED THEN
    SET 'puluhan' with the value of str index(i) plus str index(0)
  IF 'puluhan' mod 2 equals to 0 THEN
    CALCULATE 'result' by adding the 'puluhan' to 'result'
  END IF
END FOR
DISPLAY 'result'


*/

function evenPairsSum (str) {
  var result = 0;
  var puluhan = 0;

  for (var i = 0; i < str.length; i+=2) {
    puluhan = str[i] + str[i+1];
    if (str[i+1] === undefined) {
      puluhan = str[i] + str[0];
    }

    if (puluhan % 2 === 0) {
      result += Number(puluhan);
      // console.log(puluhan);
    }
  }
  return result;
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134

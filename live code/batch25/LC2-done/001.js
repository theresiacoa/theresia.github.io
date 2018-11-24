/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)

*/

/*
STORE 'num' with the string '14370'
STORE 'huruf' with the string 'iaeuo'
STORE 'result' with blank string

FOR loop with the length of 'str', with
  STORE 'isChanged' with false value
  FOR loop with the length of 'num'
    IF 'str' with 



 */

function numberLetters (str) {
  var num = '14370';
  var huruf = 'iaeuo';
  var result = '';

  for (var i = 0; i < str.length; i++) {
    var isChanged = false;
    for (var j = 0; j < num.length; j++) {
      if (str[i] === num[j]) {
        isChanged = true;
        result += huruf[j];
      }
    }
    if (!isChanged) {
      result += str[i];
    }
  }
  return result;
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //

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
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/
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
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/

/* PSEUDOCODE
STORE huruf with 'aeiou'
STORE angka with '14370'

FOR each value of str with increment index-i by 1
  FOR each value of angka with increment index-j by 1
    IF str index-i equals to angka index-j THEN
      SET str index-i to huruf index-j

DISPLAY str value
*/


function numberLetters(str) {
  var angka = '14370';
  var huruf = 'iaeuo';
  var result = '';

  for (var i = 0; i < str.length; i++) {
    var isAngka = false;
    for (var j = 0; j < angka.length; j++) {
      if (str[i] === angka[j]) {
        isAngka = true;
        result += huruf[j];
      }
    }
    if (!isAngka) {
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

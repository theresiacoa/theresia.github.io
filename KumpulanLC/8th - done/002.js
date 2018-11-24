/*
======================
Where is the space?
======================
Kamu telah dilempar ke dimensi lain!
Di dunia ini, semua kalimat tidak memiliki spasi diantara setiap katanya malahan
menggunakan simbol pagar(#)!

Buatlah sebuah function yang bisa membantumu mentranslate kalimat mereka menjadi
kalimat yang ber-spasi!

Contoh ada di test case

RULES:
--------
DILARANG menggunakan built in function .split dan .join

*/

function translate(sentence) {
  var result = '';
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === '#') {
      result += ' ';
    } else {
      result += sentence[i];
    }
  }
  return result;
}

//TEST CASES
console.log(translate('aku#ingin#makan')) // aku ingin makan
console.log(translate('aku#lapar')) // aku lapar
console.log(translate('tolong#bantu#aku')) // tolong bantu aku
console.log(translate('selamatkan#aku#dari#serangan#monster')) // selamatkan aku dari serangan monster
console.log(translate('aku#butuh#istirahat')) // aku butuh istirahat

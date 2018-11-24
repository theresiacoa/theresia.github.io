/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

// PSEUDOCODE

function formatUang(number) {
  
  var numStr = number.toString();
  var result = '';
  var counter = 0;

  for (var i = numStr.length-1; i >= 0; i--) {
    if (i === numStr.length-1) {
      result += ',00';
    }
    if (counter < 2 || i === 0) {
      result = numStr[i] + result;
      counter++;
    } else {
      result = '.' + numStr[i] + result;
      counter = 0;
    }
    if (i === 0) {
      result = 'Rp' + result;
    }
  }
  return result;
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00

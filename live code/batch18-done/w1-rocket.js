// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris ganjil kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/


// @ mewakili kelipatan ganjil
// $ kelipatan genap
// * khusus baris ganjil kelipatan 3


function drawSymbolicColsBox (height) {
  var angka = 1;

  for (var i = 0; i < height; i++) {
    var result = '';
    for (var j = 0; j < height; j++) {
      if (angka % 3 === 0) {
        result += '*' + ' ';
      } else if (angka % 2 === 1) {
        result += '@' + ' ';
      } else if (angka % 2 === 0) {
        result += '$' + ' ';
      }
      angka++;
    }
    result += '\n';
    console.log(result);
  }
}

drawSymbolicColsBox (5);
console.log();
drawSymbolicColsBox (3);
console.log('\n');




// SOAL:
/*
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
*/

function soal (num) {
  var result = '';
  var angka = 1; 

  for (var i = 0; i < num; i++) {
    for (var j = 1; j <= num; j++) {
      result += angka + ' ';
      angka++;
    }
    result += '\n';
  }
  console.log(result);
}

soal(5);

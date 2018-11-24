/*
===================
Jumlah Huruf Vocal
===================
[INSTRUCTIONS]

SumVocal adalah sebuah function yang menerima satu parameter berupa array of string.
function akan mereturn sebuah nilai jumlah dari huruf vocal yang ada di array tersebut.
Jika tidak ada angka ganjil dalam array tersebut, maka function akan mereturn angka -1

[RULE]
- Wajib menuliskan pseudocode atau algorithma. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan sintaks .split()! .findIndex .indexOf .filter .map
- Dilarang menggunakan regex .match, .replace dan lainnya!
- Asumsi input selalu upper case atau huruf besar
- Jika tidak ada huruf vocal maka function akan mengembalikan nilai -1
[EXAMPLE]
SumVocal('ABCDEFG')

output: 2
*/

/* PSEUDOCODE

STORE 'result' with zero value (num)
STORE 'vocal' with 'AEIOU' (string)

FOR each of 'input' value
  FOR each of 'vocal' value
    IF 'input' equals to 'vocal'
      ADD result by 1
    END IF
  END LOOP
END LOOP

IF 'result' equals to 0
  DISPLAY -1
ELSE
  DISPLAY 'result'
 */

function SumVocal(input) {
 
  var result = 0;
  var vocal = 'AEIOU';

  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < vocal.length; j++) {
      if (input[i] === vocal[j]) {
        result++;
      }
    }
  }
  if (result === 0) {
    return -1;
  }
  return result;
}

console.log(SumVocal("AIUEO")); // 5
console.log(SumVocal("HACKTIV8")); // 2
console.log(SumVocal("JAKARTA")); // 3
console.log(SumVocal("QWRTYP")); // -1

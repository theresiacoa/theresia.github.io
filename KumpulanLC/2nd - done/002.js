/**
Reverse All
Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.
Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']
- input: []
  output: []


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
*/

/* PSEUDOCODE

STORE 'result' with blank array

FOR each arr value (with increment index)
  STORE 'kata' with blank string
  FOR each arr index value (with increment index(j))
    SET 'kata' equals to arr index (j) value plus 'kata'
  END LOOP
  ADD 'kata' into 'result'
END LOOP
DISPLAY 'result' value
 */

function reverseAll(arr) {
  var result = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    var kata = '';
    //console.log(arr[i]);
    for (var j = 0; j < arr[i].length; j++) {
      kata = arr[i][j] + kata;
    }
    result.push(kata);
  }
  return result;
}

console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []

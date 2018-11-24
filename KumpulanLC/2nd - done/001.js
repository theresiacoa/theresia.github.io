/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/

/* PSEUDOCODE

STORE 'nilai' with 75 (num)
STORE 'jumlah' with zero value (num)

FOR each values of 'scores'
  IF 'scores' value is greater than equals to 75 THEN
    ADD 'jumlah' by 1
  END IF
END LOOP

IF the length of 'scores' equals to 0 THEN
  DISPLAY 'data kosong'
ELSE
  IF 'jumlah' equals to the value of 'scores' length THEN
    DISPLAY 'Semua orang lulus'
  ELSE IF 'jumlah' equals to 0 THEN
    DISPLAY 'Tidak ada yang lulus'
  ELSE
    DISPLAY the numbers of graduatees
  END IF
END IF
 */

function graduatesCount (scores) {
  var nilai = 75;
  var jumlah = 0;

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      jumlah++;
    }
  }

  if (scores.length === 0) {
    return 'Data kosong';
  } else {
    if (jumlah === scores.length) {
      return 'Semua orang lulus';
    } else if (jumlah === 0) {
      return 'Tidak ada yang lulus';
    } else {
      return jumlah + ' orang lulus';
    }
  }

}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong

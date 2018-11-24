/*
==================================
Array Mastery: Largest Number
==================================

[INSTRUKSI]
Function largestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999,
dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
largestNumber akan mengembalikan angka yang terbesar dari array tersebut.

[CONTOH]
input: [4, 2, 5, 1]
output: 5

[RULE]
- Wajib menuliskan algoritma. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built-in function .MAX dan .apply
*/

/* ALGORITMA
1. Simpan 'largestNum' dengan nilai apapun (num)
2. Simpan 'result' dengan string kosong
3. Looping dengan nilai index sama dengan 0, dengan panjang array 'numbers'
  3a. Jika 'numbers' dengan index value lebih besar dari nilai result MAKA
    3aa. nilai result akan diganti dengan nilai 'numbers' dengan index value
5. print result

 */

function largestNumber(numbers) {
  var result = '';
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}

// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321

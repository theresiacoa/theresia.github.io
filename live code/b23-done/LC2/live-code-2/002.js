
/*
==================================
Array Mastery: Second Smallest
==================================
Nama:________
[INSTRUKSI]
Function secondSmallest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info test case, bukan harus divalidasi/dicek).
secondSmallest akan mengembalikan angka yang kedua terkecil dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 2
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method Math.max, Math.min, .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

function secondSmallest(numbers) {
  var result = '';
  for (var i = 0; i < numbers.length-1; i++) {
    if (numbers[i] > numbers[i+1]) {
      var temp = numbers[i];
      numbers[i] = numbers[i+1];
      numbers[i+1] = temp;
      i = -1;
    }
  }
  //console.log(numbers);
  return numbers[1];
}
  
// TEST CASES
console.log(secondSmallest([5, 2, 1, 4])); // 2
console.log(secondSmallest([999, 5, 0, 1, 4, 998])); // 1
console.log(secondSmallest([15, 32, 11, 14])); // 14
console.log(secondSmallest([5, 4, 3, 2, 1, 0])); // 1
console.log(secondSmallest([123, 321, 143, 313])); // 143

/*
  Count duplicates using recursive! 🐼

  Diberikan sebuah function countDuplicateLettersRecursive yang menerima 1 parameter bertipe string.
  Function ini akan mengembalikan berapa banyak huruf yang duplikat

  RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function countDuplicateLettersRecursive
  - Dilarang mengubah tipe data parameter saat dipanggil kembali
  - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif
  - Dilarang menggunakan regex

*/


function countDuplicateLettersRecursive (word) {
  if (word.length === 0) {
    return 0;
  }
  var count = 0;
  for (var i = 1; i < word.length; i++) {
    if (word[0] === word[i]) {
      count++;
    }
  }
  if (count === 1) {
    // console.log(count, word.substring(1));
    return 1 + countDuplicateLettersRecursive (word.substring(1));
  } else {
    return 0 + countDuplicateLettersRecursive (word.substring(1));
  }
}


console.log(countDuplicateLettersRecursive('passionate')) // 2
console.log(countDuplicateLettersRecursive('adalaha')) // 1
console.log(countDuplicateLettersRecursive('pangkal')) // 1
console.log(countDuplicateLettersRecursive('danau')) // 1
console.log(countDuplicateLettersRecursive('greatest')) // 2
console.log(countDuplicateLettersRecursive('wizard')) // 0

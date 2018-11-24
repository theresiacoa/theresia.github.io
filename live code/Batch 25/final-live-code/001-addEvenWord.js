/*
  ODD EVEN WORDS
  ==================

  function oddEventWord adalah sebuah function yang menerima 1 parameter berupa string kalimat.
  function ini akan mengubah setiap kata dalam kalimat tersebut menjadi odd atau even
  - jika jumlah karakter dalam kata tersebut adalah ganjil maka dirubah menjadi odd
  - jika jumlah karakter dalam kata tersebut adalah genap maka dirubah menjadi even


  example:
  oddEventWord('aku programmer')

  proses:
  terdiri dari dua kata aku, dan programmer
  kata aku terdiri dari tiga karakter a, k dan u sehingga dirubah menjadi odd
  kata programmer terdiri dari sepuluh karakter p, r, o, g, r, a, m, m, e, dan r sehingga dirubah menjado even


  output: odd even

  RULES:
  - WAJIB disertai dengan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .indexOf()

*/
function oddEventWord(kalimat) {
  var count = 0;
  var result = '';

  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== ' ') {
      count++;
    }
    if (kalimat[i] === ' ' || i === kalimat.length - 1) {
      if (count % 2 === 0) {
        result += 'even ';
      } else if (count % 2 === 1){
        result += 'odd ';
      }
      count = 0;
    }
  }
  if (kalimat === '') {
    return 'invalid input';
  }
  return result;
}


console.log(oddEventWord('baca buku')) // even even
console.log(oddEventWord('rajin belajar')) // odd odd
console.log(oddEventWord('aku suka javascript')) // odd even even
console.log(oddEventWord('ikan')) // even
console.log(oddEventWord('')) // invalid input

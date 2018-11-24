/**
Array Injector
--------------
Implementasikan function `arrayInjector` untuk menyisipkan `secondData` ke `firstData`.
Diberikan juga parameter tambahan yaitu `index` yang akan digunakan untuk menandakan bahwa
`secondData` akan dimasukkan mulai ke `index`.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal 
  tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']
*/


function arrayInjector(firstData, index, secondData) {

  var result = [];

  for (var i = 0; i < firstData.length; i++) {
    //console.log(i, firstData[i]);
    if (i == index) {
      for (var j = 0; j < secondData.length; j++) {
        result.push(secondData[j]);
      }
    }
    result.push(firstData[i]);
  }
  return result; 



  // for (var i = 0; i < secondData.length; i++) {
  //   firstData.splice(index, 0, secondData[i]);
  //   index++;
  // }

  //console.log(firstData);
}

console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6, 7]

console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

console.log(
  arrayInjector(["Dimitri", "Alexei", "Alexander", "Alisa"], 3, ["Dragunov"])
);
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']

/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut.
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!

/*
PSEUDOCODE

STORE 'result' with 1 (num)
STORE 'num' with 0 (num)
STORE 'length' with 0 (num)

IF the 'length' of 'arrOperand1' > the length of 'arrOperand2' THEN
  SET 'length' to the length of 'arrOperand1'
ELSE
  SET 'length' to the length of 'arrOperand2'

FOR each value of the length with incremend (i) by 1
  IF the value of 'arrOperand1' is UNDEFINED then
    SET 'num' with the value of 'arrOperand2' * 0
  IF the value of 'arrOperand2' is UNDEFINED then
    SET 'num' with the value of 'arrOperand1' * 0
  ELSE
    SET 'num' with the value of 'arrOperand1' * 'arrOperand2'

  IF 'num' mod 2 is 1 THEN
    SET 'result' to 'result' * 'num' value
END LOOP

IF 'length' equals to 0 THEN
  DISPLAY 0
ELSE
  DISPLAY 'result'






*/
function multiplyTheOdds(arrOperand1, arrOperand2) {
  
  var num = 0;
  var result = 1;

  if (arrOperand1.length > arrOperand2.length) {
    var length = arrOperand1.length;
  } else {
    length = arrOperand2.length;
  }

  for (var i = 0; i < length; i++) {
    if (arrOperand1[i] === undefined) {
      num = arrOperand2[i] * 0;
    }
    if (arrOperand2[i] === undefined) {
      num = arrOperand1[i] * 0;
    } else {
      num = arrOperand1[i] * arrOperand2[i];
    }
    // console.log(num);

    if (num % 2 === 1) {
      result *= num;
    } 
  }
  if (length === 0) {
    return 0;
  }
  return result;
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0

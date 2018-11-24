/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

/* ALGORITMA

1. STORE arr with blank array
2. STORE counter with 1 - num
3. Loop each value of array with index-i (increment by one) then go to step 4
4. if index-i is not the same as index then go to 4a, else go to 5.
  4a. push the array of index-i into arr
5. while counter is not the same as count value
  5a. add counter value by one
  5b. add index(i) value by one
6. after that, if index-i is less than the length of array, go back to 3. if not, go to 7
7. display arr.

 */ 
 
function arrayRemover (array, index, count) {
  var arr = [];
  var counter = 1;

  for (var i = 0; i < array.length; i++) {
    if (i !== index) {
      arr.push(array[i]);
    } else {
      while (counter !== count) {
        counter++;
        i++;
        //console.log(i);
      }
    }
  }
  return arr;
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []

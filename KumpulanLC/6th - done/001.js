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
  [ 666, 'deleted', 'deleted', 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce, .slice dan .splice!
*/

/* ALGORITMA

1. store arr with blank array
2. store counter with 1 (num)
3. loop each of array value with increment index-i, then go to 4
4. if index-i is not the same as index then
  4a. push array index-i
5. else, if index-i equals to index then
  5a. while counter is not the same with count, go to step 5aa
    5aa. push a string with value 'deleted' into arr
    5ab. add counter by 1
    5ac. assign index-i by adding index and count minus 1
6. if there's any array value left after counter value and count value the same, push the value into arr
7. display arr


 */

function arrayRemover(array, index, count) {

  var arr = [];
  var counter = 0;

  for (var i = 0; i <= array.length - 1; i++) {
    if (i !== index) {
      arr.push(array[i]);
    } else {
      while (counter !== count) {
        arr.push('deleted');
        counter++;
      }
      i = index + count - 1;  //set the index, -1 because at the end of FOR loop, it will do i++;
    }
  }
  return arr;
}

console.log(arrayRemover([1, 2, 3], 0, 2)); // ['deleted', 'deleted', 3]
console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 'deleted', 'deleted', 10, 5, 6 ]
console.log(arrayRemover([1, 2, 3], 0, 3)) // ['deleted', 'deleted', 'deleted']

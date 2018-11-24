/*
===========================
Initial Grouping Descending
==========================
[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

function initialGroupingDescending(studentsArr) {
  // Only Code Here
 
}

console.log(initialGroupingDescending(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(
  initialGroupingDescending(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

// console.log(
//   initialGroupingDescending(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
// );
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
// function initialGroupingDescending(studentsArr) {
//   // Only Code Here
//   var array = [];
//   var obj = {};
//   var kamus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   for (var j = kamus.length-1; j >= 0; j--) {
//     for (var i = 0; i <= studentsArr.length - 1; i++) {
//       if (kamus[j] == studentsArr[i][0]) {
//         obj[studentsArr[i][0]] = [];
//         obj[studentsArr[i][0]].push(studentsArr[i][0]);
//       }
//     }
//   }
//   console.log(obj)

//   for (var i = 0; i <= studentsArr.length - 1; i++) {
//     var names = "";
//     if (studentsArr[i][0] == obj[studentsArr[i][0]]) {
//       names = names + studentsArr[i];
//     }
//     obj[studentsArr[i][0]].push(studentsArr[i]);
//   }
//   // return obj;
// }

/**
  *******************
  SNAKE LADDER
  *******************

  Diberikan sebuah function snakeLadder yang memiliki satu paramter yaitu:
   - height bertipe number

  Function ini akan mengembalikan array multidimensi dimana array
  tersebut berisi angka yang menyerupai ular tangga.

  Untuk pola bisa dilihat pada test case

  RULE:
  - DILARANG menggunakan built in function .reverse()

**/
function snakeLadder(height) {
  if (height < 3) {
    return 'minimum height is 3';
  }
  var result = [];
  var num = 1;
  for (let i = 1; i <= height; i++) {
    var baris = [];
    for (let j = 1; j <= height; j++) {
      if (i % 2 !== 0) {
        baris.push(num);
        num++;
      }
      else {
        baris.unshift(num);
        num++;
      }
    }
    result.unshift(baris);
  }
  return result;
}

console.log(snakeLadder(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(snakeLadder(3));
// [ [ 7, 8, 9 ],
//   [ 6, 5, 4 ],
//   [ 1, 2, 3 ]
// ]

console.log(snakeLadder(2)); // minimum height is 3

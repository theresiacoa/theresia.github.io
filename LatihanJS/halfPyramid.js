// *
// * *
// * * *
// * * * *
// * * * * *

var height = 5;
var temp = '';
for (let i = 0; i < height; i++) {
  temp = temp + '* ';
  console.log(temp);
}
console.log('\n');

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
var height = 5;
var result = '';
for (let i = 1; i <= height; i++) {
  result = result + i + ' ';
  console.log(result);
}
console.log('\n');

// A
// B B
// C C C
// D D D D
// E E E E E

var height = 5;
var result = '';
var kamus = 'abcdefghijklmnopqrstuvw';
for (let i = 0; i < height; i++) {
  var result = kamus[i] + ' ';
  for (let j = 0; j < i; j++) {
    result = result + kamus[i] + ' ';
  }
  console.log(result);
}
console.log('\n');



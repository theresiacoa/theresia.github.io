// * * * * *
// * * * *
// * * * 
// * *
// *

var height = 5;
for (let i = height; i > 0; i--) {
  var result = '';
  for (let j = 0; j < i; j++) {
    result += '* ';
  }
  console.log(result);
}
console.log('\n');



function ladder (input) {
  var bintang = '';
  for (var i = input; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      bintang += '*' + ' ';
    }
    bintang += '\n';
  }
  return bintang;
}

console.log(ladder(5));

// 1 2 3 4 5
// 1 2 3 4 
// 1 2 3
// 1 2
// 1

var height = 5;
for (let i = height; i > 0; i--) {
  var result = '';
  for (let j = 1; j <= i; j++) {
    result += j + ' ';
  }
  console.log(result);
}
console.log('\n');




//Menyusun barisan bintang
var rows1 = 5;
for (var i = 0; i < rows1; i++) {
  console.log('*');
}
console.log();


//barisan bintang dengan nested looping
var rows2 = 5;
for (var j = 0; j < rows2; j++) {
  var result = '';
  for (var k = 0; k < rows2; k++) {
    result += '*';
  }
  console.log(result);
}
console.log();


//stengah pyramid
var rows3 = 5;
var result = '';
for (var l = 0; l < rows3; l++) {
  result += '*';
  console.log(result);
}

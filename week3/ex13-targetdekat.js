//find o
//take the smallest distance of o and x

function targetTerdekat(arr) {
  var jarakTerdekat = arr.length;
  var jarak = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      var indexO = i;
    }
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === 'x') {
        var jarak = Math.abs(j - indexO);
        if (jarak < jarakTerdekat) {
          jarakTerdekat = jarak;
        }
      }
    }
  }
  //console.log(indexO);
  if (jarakTerdekat === arr.length) {
    return 0;
  }
  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', ' ', 'o','x', ' ', 'o',' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
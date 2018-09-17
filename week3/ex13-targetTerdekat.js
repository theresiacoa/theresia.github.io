
//BELUM SELESAI
function targetTerdekat(arr) {
  var anchor = null;
  var anchorIndex = 0;
  var minDistance = 0;

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === 'o') {
  //     anchor = arr[i];
  //     anchorIndex = i;
  //     if (arr[i] === 'x') {
  //       return anchorIndex - i;
  //     }
  //   }
  // }
  if (arr.indexOf('x') == -1 || arr.indexOf('o') == -1) {
    return 0;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {
        for (var j = 0; j < arr.length; j++) {
          if (arr[j] === 'x') {
            return Math.abs(j - i);
          }
        }
      }
    }
  }
  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
function targetTerdekat(arr) {
  var o = arr.indexOf('o');    //because 'o' only 1 in every question 
  var jarakTerdekat = arr.length;

  if (arr.indexOf('x') === -1) {
    return 0;
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        var jarak = Math.abs(o - i);
        if (jarak < jarakTerdekat) {
          jarakTerdekat = jarak;
        }
      }
    }
    return jarakTerdekat;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
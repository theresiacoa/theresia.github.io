function pasanganTerbesar(num) {
  var arr = [];
  var result = '';
  var numStr = num.toString();

  for (var i = 0; i < numStr.length-1; i++) {
    var puluhan = numStr[i] + numStr[i+1];
    arr.push(puluhan);
  }

  //sorting
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j+1]) {
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      j = -1;
    }
  }
  //console.log(arr);
  return arr[1];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 41
console.log(pasanganTerbesar(12783456)); // 27
console.log(pasanganTerbesar(910233)); // 10
console.log(pasanganTerbesar(71856421)); // 21
console.log(pasanganTerbesar(79918293)); // 29
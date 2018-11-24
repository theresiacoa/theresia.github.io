function pasanganTerbesar(num) {
  var numStr = num.toString();
  var max = '';
  for (var i = 0; i < numStr.length; i++) {
    var puluhan = numStr[i] + numStr[i+1];
    if (puluhan > max) {
      max = puluhan;
    }
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
function pasanganTerbesar(num) {
  num = num.toString();
  var nilaiMax = 0;
  for (var i = 0; i < num; i++) {
    var puluhan = num[i] + num[i+1];
    if (nilaiMax < puluhan) {
      nilaiMax = puluhan;
    }
  }
  return Number(nilaiMax);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
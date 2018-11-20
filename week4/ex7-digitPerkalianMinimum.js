function digitPerkalianMinimum(angka) {
  var result = 0;

  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      var angkaStr = String(angka / i).length;
      var indeks = i.toString().length;

      if (result === 0) {
        result = angkaStr + indeks;
      } else if (angkaStr + indeks <= result) {
        result = angkaStr + indeks;
        //console.log(result, '===', angkaStr, indeks);
      }
    }
  }
  return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
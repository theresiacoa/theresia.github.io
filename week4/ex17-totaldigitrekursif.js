function totalDigitRekursif(angka) {
  //basecase / limit
  var str = angka.toString();
  if (str.length < 1) {
    return 0;
  }

  var angkaDepan = str[0];
  var angkaSisa = str.substr(1, str.length-1);
  return Number(angkaDepan) + totalDigitRekursif(angkaSisa);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
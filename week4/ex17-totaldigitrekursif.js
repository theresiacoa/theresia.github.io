function totalDigitRekursif(angka) {
  angkaStr = angka.toString();

  if (angkaStr.length === 0) {
    return 0;
  }
  return Number(angkaStr[0]) + totalDigitRekursif(angkaStr.substr(1));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
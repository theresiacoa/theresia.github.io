function kaliTerusRekursif(angka) {
  angkaStr = angka.toString();

  if (angkaStr.length === 1) {
    return Number(angkaStr);
  }
  var result = 1;
  for (var i = 0; i < angkaStr.length; i++) {
    result *= Number(angkaStr[i]);
    //console.log(result);
  }
  return kaliTerusRekursif(result);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
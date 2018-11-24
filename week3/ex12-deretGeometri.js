function tentukanDeretGeometri(input) {
  var result = '';
  var nilaiAwal = input[1] / input[0];
  for (var i = 0; i < input.length - 1; i++) {
    nilai = input[i + 1] / input[i];
    if (nilai !== nilaiAwal) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
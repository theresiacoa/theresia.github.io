function tentukanDeretAritmatika(input) {
  var result = [];

  var selisihAwal = input[1] - input[0];
  for (var i = 0; i < input.length-1; i++) {
    var selisih = input[i+1] - input [i];
    if (selisih !== selisihAwal) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
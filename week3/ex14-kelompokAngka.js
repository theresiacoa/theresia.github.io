//arr1 === genap
//arr2 === ganjil
//arr3 === kelipatan 3

function mengelompokkanAngka(input) {
  var result = [[], [], []];
  //console.log(result[2]);

  for (var i = 0; i < input.length; i++) {
    if (input[i] % 3 === 0) {
      result[2].push(input[i]);
    } else if (input[i] % 2 === 0) {
      result[0].push(input[i]);
    } else if (input[i] % 2 === 1) {
      result[1].push(input[i]);
    }
  }
  return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
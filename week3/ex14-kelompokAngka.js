function mengelompokkanAngka(arr) {
  var myArray = [
    [], [], []
  ];

  //angka kelipatan 3, baris k3
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      myArray[2].push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      myArray[0].push(arr[i]);
    } else if (arr[i] % 2 !== 0) {           //angka ganjil, baris kedua
      myArray[1].push(arr[i]);
    }
  }
  return myArray;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
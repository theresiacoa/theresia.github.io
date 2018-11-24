function cariModus(arr) {
  
  var jumlah = 0;

  for (var i = 0; i < arr.length; i++) {
    var counter = 0;
    for (var j = i+1; j < arr.length; j++) {
      //console.log('===' + i, j, counter, jumlah)
      if (arr[i] === arr[j]) {
        counter++;
        if (jumlah < counter) {
          jumlah = counter;
          var modus = arr[i];
        }
      }
    }
  }
  if (jumlah === 0 || jumlah === arr.length-1) {
    return -1;
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
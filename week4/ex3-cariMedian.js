function cariMedian(arr) {
  var result = 0;
    if (arr.length % 2 !== 0) {
      result = arr[(arr.length-1)/2];
    } else {
      var median1 = arr[Math.floor((arr.length-1)/2)];
      var median2 = arr[Math.round((arr.length-1)/2)];
      result = (median1 + median2) / 2;
    }
  return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
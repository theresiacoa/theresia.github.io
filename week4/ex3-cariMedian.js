function cariMedian(arr) {
  var index = arr.length-1;
  var median = 0;

  if (index % 2 === 0) {
    median = arr[Math.round(index/2)];
    return median;
  } else {
    median = arr[Math.round(index/2)] + arr[Math.floor(index/2)];
    return median / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
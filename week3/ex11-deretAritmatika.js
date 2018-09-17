function tentukanDeretAritmatika(arr) {
  var array =[];
  for (let i = 0; i < arr.length-1;i++) {
    var deret = arr[i+1] - arr[i];
    array.push(deret);
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] !== array[0]) {
      return false;
    }
  } return true;
    
    // var selisih = array.reduce(function(a,b) {
    //   return a === b;
    // }, 0);
}


// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
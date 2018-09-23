function checkAB(str) {

  for (var i = 0; i < str.length; i++) {
    var minDistance = str[i+4];
    if (str[i] === 'a' && minDistance === 'b') {
      return true;
    } else if (str[i] === 'b' && minDistance === 'a') {
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
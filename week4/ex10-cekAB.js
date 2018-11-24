//ab jarak 3
function checkAB(input) {
  for (var i = 0; i < input.length; i++) {
    var distance = input[i+4];
    if (input[i] === 'a' && distance === 'b') {
      return true;
    } else if (input[i] === 'b' && distance === 'a') {
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
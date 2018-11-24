//faktorial
function faktorial (input) {
  if (input === 1) {
    return 1;
  }
  return input * faktorial(input-1);
}

console.log(faktorial(5)); //120
console.log(faktorial(3)); //3*2*1 = 6
console.log('');


//Array Palindrome
function arrPal (input) {
  
  
}

console.log(arrPal([3, 6, 0, 6, 3]));
//Palindrome -- true
console.log(arrPal([1, 2, 3, 4, 5]));
//Not Palindrome -- false
console.log('');


//angka palindrome
//function angka (input)
function xo(str) {
  var jumlahO = 0;
  var jumlahX = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'o') {
      jumlahO++;
    } else {
      jumlahX++;
    }
  }
  if (jumlahO === jumlahX) {
    return true;
  } else {
   return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
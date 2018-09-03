function xo(str) {
    var countX = 0;
    var countO = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            countX = countX + 1;
        } else {
            countO = countO + 1;
        }
    }
    return countX == countO; 
  }
  
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
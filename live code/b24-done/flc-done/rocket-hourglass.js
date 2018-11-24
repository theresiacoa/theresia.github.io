/**
  **********
  HOURGLASS
  **********

  Buatlah sebuah function bernama hourglass. Function hourglass adalah sebuah
  function yang menerima sebuah parameter berupa number dengan asumsi nilai
  parameternya minimal 3. Function akan mereturn string yang memiliki element
  di dalamnya berupa simbol '#' yang nantinya berbentuk jam pasir/hourglass.


  RULES:
**/

function hourglass(num) {
  var result = '';
  var total = (num * 2) - 1;

  for (var i = 0; i < num; i++) {
    var hash = '';
    for (var j = 0; j < total - i; j++) {
      if (j >= i) {
        hash += '#';
      } else {
        hash += ' ';
      }
    }
    result += hash + '\n';
  }

  for (var k = num - 1; k > 0; k--) {
    hash = '';
    for (var l = 1; l <= total - k + 1; l++) {
      if (k > l) {
        hash += ' ';
      } else {
        hash += '#';
      }
    }
    result += hash + '\n';
  }

  if (num < 3) {
    return 'Minimum parameter is 3';
  }
  return result;
}






// console.log(hourglass(2)); //Minimum parameter is 3

console.log(hourglass(4));
/*
#######       //4+3 === (4 * 2) - 1
 #####
  ###
   #
  ###
 #####
#######
*/

console.log(hourglass(5));
/*
#########     // 5+4 ===  (5 * 2) - 1
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/


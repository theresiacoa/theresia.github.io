// 0
// 01
// 012
// 0123
// 01234
// 0123
// 012
// 01
// 0


function halfDiamond(num) {

  var result = '';

  var numBawah = Math.floor(num / 2);
  if (num % 2 === 1) {
    var numAtas = Math.round(num / 2);
  } else {
    numAtas = Math.floor(num / 2);
  }

  for (var i = 0; i < numAtas; i++) {
    result += i;
    console.log(result);
  }

  for (var k = 0; k < numBawah; k++) {
    result = '';
    for (var j = 0; j < numBawah - k; j++) {
      result += j;
    }
    console.log(result);
  }
}

halfDiamond(9);
console.log();
halfDiamond(6);
console.log('\n');


// ************         input or height = 5
// *****  *****         jumlah bintang = (5+1)*2
// ****    ****       
// ***      ***
// **        **
// *----------*
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************

function diamondCard(input) {
  var Bintang = (input + 1) * 2;

  for (var i = 0; i < input + 1; i++) {
    var result = '';
    for (var j = 0; j < Bintang - (i*2); j++) {
      result += '*';
      if (j === input - i) {
        for (k = 0; k < i*2; k++) {
          result += ' ';
        }
      }
    }
    console.log(result);
  }
}

diamondCard(5);
console.log('\n');


//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

function wholeDiamond(input) {
  var result = '';

  var bawah = ;
  if (input % 2 === 0) {
    var atas = Math.floor(input/2);
  } else {
    var atas = Math.round(input/2);
  }

  for (var i = 0; i < input.length; i++) {

  }
}

wholeDiamond(7);
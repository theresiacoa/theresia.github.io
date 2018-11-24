/**
  TIC TAC TOE PRIME

  Diberikan sebuah function tictactoePrime dengan parameter number of array 2 dimension.
  Function ini akan menghasilkan number of array 2 dimension yang telah di convert jika
  terdapat angka prima secara berurutan sebanyak 3 kali mendatar ataupun menurun.

  Contoh:
  ---------
  input:
    [
      [2, 5, 7],
      [5, 8, 19],
      [1, 3, 23]
    ]

  output:
    [
      [X, X, X],
      [5, 8, X],
      [1, 3, X]
    ]

    NOTE:
    - Angka 1 bukanlah sebuah angka prima
    - Angka prima yang telah diconvert tetap dihitung untuk baris/kolom selanjutnya

**/

function isPrime(number) {
  var isPrime = true;
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    } else {
      isPrime = true;
    }
  }
  if (number < 2) {
    return false;
  }

  return isPrime;
}
// console.log(isPrime(10));
// console.log(isPrime(9));
// console.log(isPrime(7));

function tictactoePrime(array) {
  var col = 0;
  var row = 0;
  var horizontal = [];
  var data = [];
  while (col <= array.length - 1 && array[row][col] != undefined) {
    data.push(array[row][col]);
    row += 1;
    if (row == array.length) {
      horizontal.push(data);
      data = [];
      col += 1;
      row = 0;
    }
  }
  for (var i = 0; i <= horizontal.length - 1; i++) {
    var counter = 0;
    for (var j = 0; j <= horizontal[i].length - 1; j++) {
      if (counter > 0) {
        // console.log('counter----',counter);
        horizontal[i][j] = "X";
        counter = counter - 1;
      } else if (isPrime(horizontal[i][j]) == true && counter == 0) {
        // console.log("ANGKA===", horizontal[i][j], " COUNTER: ", counter);
        counter = 1;
        for (var k = j; k <= horizontal[i].length - 1; k++) {
          if (
            (counter < 3 && isPrime(horizontal[i][k]) == false) ||
            (counter < 3 && k == horizontal[i].length - 1)
          ) {
            // console.log("FAILED===" + horizontal[i][k]);
            counter = 0;
            break;
          } else if (isPrime(horizontal[i][k]) == true) {
            if (k == horizontal[i].length - 1 && counter >= 3) {
              //   console.log("test===", horizontal[i][j]);
              horizontal[i][j] = "X";
              break;
            }
            // console.log("PRIME==", horizontal[i][k], " COUNTER==", counter);
            counter += 1;
          } else if (counter >= 3 && isPrime(horizontal[i][k]) == false) {
            horizontal[i][j] = "X";
            // console.log("COUNTER AKHIR JIKA PRIME===" + counter);
            break;
          }
        }
      }
    }
  }
  var j = 0;
  var i = 0;
  var vertical = [];
  var dataV = [];
  while (j <= horizontal[0].length-1) {
    dataV.push(horizontal[i][j]);
    i += 1;
    if (i == horizontal.length) {
      vertical.push(dataV);
      dataV = [];
      j += 1;
      i = 0;
    }
  }
  console.log(horizontal)
  console.log(vertical)

  for (var i = 0; i <= vertical.length - 1; i++) {
    var counter = 0;
    for (var j = 0; j <= vertical[i].length - 1; j++) {
      if (counter > 0) {
        // console.log('counter----',counter);
        vertical[i][j] = "X";
        counter = counter - 1;
      } else if (
        (isPrime(vertical[i][j]) == true && counter == 0) ||
        vertical[i][j] == "X" ||
        vertical[i][j] == "X"
      ) {
        // console.log("ANGKA===", vertical[i][j], " COUNTER: ", counter);
        counter = 1;
        for (var k = j; k <= vertical[i].length - 1; k++) {
          if (
            (counter < 3 && isPrime(vertical[i][k]) == false) ||
            (counter < 3 && k == array[i].length - 1)
          ) {
            // console.log("FAILED===" + vertical[i][k]);
            counter = 0;
            break;
          } else if (isPrime(vertical[i][k]) == true || vertical[i][k] == "X") {
            if (k == array[i].length - 1 && counter >= 3) {
              //   console.log("test===", vertical[i][j]);
              vertical[i][j] = "X";
              break;
            }
            // console.log("PRIME==", vertical[i][k], " COUNTER==", counter);
            counter += 1;
          } else if (
            (counter >= 3 && isPrime(vertical[i][k]) == false) ||
            (counter >= 3 && vertical[i][k] != "X")
          ) {
            vertical[i][j] = "X";
            // console.log("COUNTER AKHIR JIKA PRIME===" + counter);
            break;
          }
        }
      }
    }
  }
  return vertical;
}

console.log(tictactoePrime([[
  [2, 5, 7],
  [5, 8, 19],
  [1, 3, 23]]));
/*
[
  ['X', 'X', 'X'],
  [5, 8, 'X'],
  [1, 3, 'X']
]
*/

console.log(tictactoePrime([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [13, 11, 19, 15, 16],
  [18, 17, 14, 20, 21],
  [22, 23, 24, 25, 12]]));

/*
[
  [1, 'X', 3, 4, 5],
  [6, 'X', 8, 9, 10],
  ['X', 'X', 'X', 15, 16],
  [18, 'X', 14, 20, 21],
  [22, 'X', 24, 25, 12]
]
*/

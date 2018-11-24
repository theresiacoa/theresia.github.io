/*
[    
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "n", " ", " ", " "],
    [" ", " ", " ", "n", " ", "n", " ", "n", " "],
    [" ", "n", " ", "n", " ", "n", " ", "n", " "]
], 2
hasil=5
*/

function jarakTempuh(array, num) {
  var counter = 0;
  var obstacle = 0;

  for (var col = 0; col < array[0].length; col++) {
    for (var row = 0; row < array.length; row++) {
      // console.log(array[row][col], '===');
      if (array[row][col] === 'n') {
        obstacle++;
      }
      if (row === array.length - 1) {
        if (obstacle > num) {
          break;
        } else {
          obstacle = 0;
          counter++;
        }
      }
    }
  }
  return counter;
}




console.log(
  jarakTempuh(
    [
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", "n", " ", "", " "],
      [" ", " ", " ", "n", " ", "n", " ", "n", " "],
      [" ", "n", " ", "n", " ", "n", " ", "n", " "]
    ],
    2
  )
); //5
/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage(input) {
  var totalVirus = 0;
  var resultArr = [];
  var arr = ['*', '#', '@', '$'];

  for (var i = 0; i < arr.length; i++) {
    var jumlah = 0;
    for (var j = 0; j < input.length; j++) {
      if (input[j] === arr[i]) {
        jumlah++;
        totalVirus++;
      }
    }
    if (jumlah !== 0) {
      resultArr.push([jumlah*100, arr[i]]);
    }
  }
  //console.log(resultArr);
  var result = '';
  for (var k = 0; k < resultArr.length; k++) {
    var percentage = resultArr[k][0] / totalVirus;
    result += percentage + '% ' + resultArr[k][1] + ', ';
  }
  return result.substr(0, result.length-2);
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @

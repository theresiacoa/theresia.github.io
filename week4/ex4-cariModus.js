//NOT DONE YET

function cariModus (arr) {
  var totalJumlah = 0;
  var modus = 0;
  var jumlah = 1;

  for(var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        jumlah = jumlah + 1;
        if (jumlah > totalJumlah) {
          totalJumlah = jumlah;
          console.log(totalJumlah);
          modus = arr[i];
          return modus;
        }
      }
    }
  }

  if(modus === 0 || totalJumlah === arr.length){
    return -1;
  }
}

// TEST CASES
// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
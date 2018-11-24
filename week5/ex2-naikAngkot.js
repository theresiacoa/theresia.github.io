function naikAngkot(arrPenumpang) {
  var kamus = 'ABCDEF';
  var result = [];
  var obj = {};

  for (var i = 0; i < arrPenumpang.length; i++) {
    obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: 0
    }
    //console.log(obj);

    var harga = 0;
    for (var j = 0; j < kamus.length; j++) {
      if (kamus[j] === obj.naikDari) {
        while (kamus[j] !== obj.tujuan) {
          harga += 2000;
          j++;
          //console.log(kamus[j] ,'!==', obj.tujuan);
        }
        //console.log(harga);
      }
    }
    obj.bayar = harga;
    result.push(obj);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'], 
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
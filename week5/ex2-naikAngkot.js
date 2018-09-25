function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var arrResult = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    var harga = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]);
    harga = harga * 2000;
    
    var obj = {};
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];
    obj.bayar = harga;
    arrResult.push(obj);
  }
   
  if (arrPenumpang.length === 0) {
    return "[]";
  } else {
    return arrResult;
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
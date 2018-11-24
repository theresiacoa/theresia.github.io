//SOAL 1
function tambah(num) {
  if (num === 1) {
    return 1;
  }
  return num + tambah(num - 1);
}
console.log(tambah(10));

//SOAL 2 -- looping
function satuDigitLooping(num) {
  while (num > 9) {
    num = 0;
    var str = num.toString();
    for (var i = 0; i < str.length; i++) {
      num += Number(str[i]);
    }
  }
  return num;
}
console.log(satuDigitLooping(408));
console.log();

//CANNOT RUN
function tambahrec(num) {
  if (num < 10) {
    return num;
  } else {
    var hasil = something(num);
    return tambahrec(hasil);
  }
}

function something (num) {
  var numStr = num.toString();
  num = 0;
  for (var i = 0; i < numStr.length; i++) {
    num += Number(numStr[i]);
  }
  //console.log(num);
}

console.log(tambahrec(408));




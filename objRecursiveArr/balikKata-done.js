function balikSetiapKata(input) {
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    var result = '';
    if (typeof input[i] === 'number') {
      input[i] = input[i].toString();
    }
    for (var j = 0; j < input[i].length; j++) {
      result = input[i][j] + result;
    }
    arr.push(result);
  }
  return arr;
}


console.log(balikSetiapKata(['saya', 'selesai', 'tugas', 'javascript', 'tingkat', 10]));
/**
Output
[‘ayas’, ‘iaseles’, ‘sagut’, ‘tpircsavaj’, ‘takgnit’, ‘01’]
*/
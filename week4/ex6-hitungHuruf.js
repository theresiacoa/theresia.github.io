function hitungHuruf(kata) {
  var arr = kata.split(' ');
  var countMax = 0;
  var result = '';
  // var temp = hitungKata(arr);
  // console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    var count = hitungKata(arr[i]);
    // console.log(temp);
    if (count > countMax) {
      countMax = count;
      result = arr[i];
    }
  }
  return result;
}

function hitungKata(arr) {
  var obj = {};
  var jumlah = 0;

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 0
    }
    obj[arr[i]]++;
  }
  
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > 1) {
      jumlah++;
    }
  }
  return jumlah;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau